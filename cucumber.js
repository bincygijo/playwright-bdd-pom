module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    require: [
      "features/step_definitions/*.ts",
      "support/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "json:playwright-report/report.json",
      "html:playwright-report/report.html"
    ],
    publishQuiet: true
  }
};
