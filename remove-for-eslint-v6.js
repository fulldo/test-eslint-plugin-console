const eslint = require("eslint");

const cli = new eslint.CLIEngine({
  parser: "@typescript-eslint/parser",
  baseConfig: {
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
    },
    plugins: ["unused-imports"],
    rules: { "unused-imports/no-unused-imports-ts": "error" },
    settings: {
      react: {
        version: "999.999.999",
      },
    },
  },
  fix: true,
});
const report = cli.executeOnFiles([`src/un-use-test/un-use-test.tsx`]);

eslint.CLIEngine.outputFixes(report);
