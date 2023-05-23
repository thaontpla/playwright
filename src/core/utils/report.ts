import { DataTypes, Model, Sequelize } from "sequelize";
import type { RunResult, EnvConfig } from "@types/core/report";

export class THRunGroup extends Model {}
export class THRun extends Model {}
export class THCase extends Model {}

export const addConf = async ({
  codeName,
  env,
  data,
}: EnvConfig): Promise<void> => {
  if (THCase.sequelize) {
    // query code name to get case
    const caseInfo = await THCase.findOne({
      where: { code: codeName },
    });

    if (caseInfo === null || caseInfo === undefined) {
      throw new Error(`Cannot find config for the test case ${codeName}`);
    }

    await THCase.update(
      {
        [`${env}_conf`]: data,
      },
      {
        where: {
          id: caseInfo["id"],
        },
      }
    );
  }
};

export const addRunResult = async ({
  codeName,
  type,
  env,
  reportUrl,
  startAt,
  finishedAt,
  result,
  runGroupId,
  testResult,
}: RunResult): Promise<{ success: boolean; thId: number }> => {
  let id = 0;
  if (THRun.sequelize && THCase.sequelize) {
    // query code name to get case
    const caseInfo = await THCase.findOne({
      where: { code: codeName },
    });

    if (caseInfo === null || caseInfo === undefined) {
      throw new Error("Cannot find config for the test case");
    }

    const runInfo = await THRun.create({
      run_group_id: runGroupId,
      type: type,
      env: env,
      report_url: reportUrl,
      case_id: caseInfo["id"],
      started_at: startAt.getTime(),
      finished_at: finishedAt.getTime(),
      result: result,
      test_result: testResult,
    });

    await THRun.update(
      {
        report_url: `${reportUrl}/show?run_id=${runInfo["id"]}`,
      },
      { where: { id: runInfo["id"] } }
    );

    if (runInfo === null || runInfo === undefined) {
      throw new Error("Cannot find config for the test run");
    }
    id = caseInfo["id"];
    await THCase.update(
      {
        [`last_run_${env}_id`]: runInfo["id"],
      },
      {
        where: {
          id: caseInfo["id"],
        },
      }
    );
  }

  return {
    success: true,
    thId: id,
  };
};
