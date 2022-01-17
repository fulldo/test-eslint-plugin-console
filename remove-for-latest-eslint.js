const { ESLint } = require("eslint");

async function main() {
  // 1. Create an instance with the `fix` option.
  const eslint = new ESLint({
    fix: true,
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
  });

  // 2. Lint files. This doesn't modify target files.
  const results = await eslint.lintFiles([`src/un-use-test/un-use-test.tsx`]);

  // 3. Modify the files with the fixed code.
  await ESLint.outputFixes(results);
}

main().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
