export type RunResult = {
    codeName: string;
    type: string;
    env: string;
    reportUrl: string;
    startAt: Date;
    finishedAt: Date;
    result: string;
    runGroupId: number;
    testResult: string;
  };
  
  export type EnvConfig = {
    codeName: string;
    env: string;
    data: string;
  };
  