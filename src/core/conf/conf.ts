import { THCase } from "@core/utils/report";
import { Op } from "sequelize";
import path from "path";
import fs from "fs";
import merge from "lodash.merge";

export class ConfigImpl {
  fileName: string;
  caseName: string;
  directory: string;
  suiteConf: Record<string, any>;
  caseConf: Record<string, any>;
  loaded: boolean;
  constructor(directory: string, caseName: string) {
    let dirName = directory;
    if (path.extname(directory) === ".ts") {
      dirName = path.dirname(directory);
      this.fileName = path.basename(directory, ".spec.ts") || "";
    }

    this.directory = dirName;
    this.caseName = caseName;
    this.loaded = false;
  }

  /**
   * Load config from file or sql
   * @returns
   */
  async loadConfig() {
    if (process.env.PREFERRED_STORAGE === "file") {
      return await this.loadConfigFromFile();
    } else if (process.env.PREFERRED_STORAGE === "remote") {
      return await this.loadTHConfigFromRemote();
    }
  }

  private setConfig(file) {
    const originalConf = require(path.join(this.directory, file));
    const config = { ...originalConf };
    const newCases = config["cases"];
    delete config["cases"];
    this.suiteConf = merge(this.suiteConf, config);
    if (newCases !== undefined) {
      this.suiteConf["cases"] = merge(this.suiteConf["cases"], newCases);
    }
  }

  private async loadConfigFromFile() {
    // 1. list all .json files
    // 2. load all to config object
    const files = fs.readdirSync(this.directory);
    let isSetConfig = false;

    if (this.fileName) {
      const file = files.find((file) => {
        const extension = path.extname(file);
        const isJsonFile = extension === ".json";
        const fileName = path.basename(file, extension);
        return fileName === this.fileName && isJsonFile;
      });

      if (file) {
        this.setConfig(file);
        isSetConfig = true;
      }
    }

    if (!isSetConfig) {
      files
        .filter((file) => path.extname(file) === ".json")
        .forEach((file) => {
          this.setConfig(file);
        });
    }

    if (
      this.caseName !== undefined &&
      this.caseName !== "" &&
      this.suiteConf &&
      this.suiteConf["cases"] !== undefined
    ) {
      this.caseConf = this.suiteConf["cases"][this.caseName] || {};
    } else {
      throw new Error("Cannot find config for the test case");
    }
    this.caseConf = this.caseConf || {};

    const envs = this.suiteConf["env"];
    delete this.suiteConf["env"];

    const env = process.env.ENV;

    const tmpEnv =
      envs && envs[env] ? JSON.parse(JSON.stringify(envs[env])) : undefined;
    const envCases = tmpEnv ? tmpEnv["cases"] : undefined;

    if (tmpEnv) {
      delete tmpEnv["cases"];
      //overwrite
      this.suiteConf = merge(this.suiteConf, tmpEnv);
      if (envCases && envCases[this.caseName]) {
        this.caseConf = merge(this.caseConf, envCases[this.caseName]);
      }
    }

    this.loaded = true;
  }

  private async loadTHConfigFromRemote() {
    if (!this.caseName || this.caseName === "") {
      throw new Error("empty case name");
    }
    const caseInfo = await THCase.findOne({
      where: {
        [Op.or]: [
          {
            code: this.caseName,
          },
          {
            code: this.caseName.replace("TC_", ""),
          },
        ],
      },
    });

    if (!caseInfo || !caseInfo[`${process.env.ENV}_conf`]) {
      throw new Error(
        `Cannot find config for the test case ${this.caseName} - ${process.env.ENV}_conf`
      );
    }
    const conf = JSON.parse(caseInfo[`${process.env.ENV}_conf`]);
    this.caseConf = {};
    if (conf["cases"]) {
      this.caseConf = conf["cases"][this.caseName] || {};
    }
    this.suiteConf = conf;
    this.loaded = true;
  }
}

/**
 * We must convert loadData function to synchronous function.
 * Because in test.describe, we can't do async (https://github.com/microsoft/playwright/issues/9636)
 * @param directory
 * @param caseName
 * @returns { Config }
 */
// export function loadData(directory: string, caseName: string): Config {
//   const conf = new ConfigImpl(directory, caseName);
//   conf.loadConfig();
//   const expired = new Date(new Date().getTime() + 60 * 1000).getTime();
//   while (!conf.loaded) {
//     require("deasync").sleep(100);
//     const now = new Date();
//     if (now.getTime() >= expired) {
//       throw new Error("Cannot get config due to timeout");
//     }
//   }

//   return conf;
// }
