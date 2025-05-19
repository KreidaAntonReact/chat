require('@packages/eslint-config/patch');

module.exports = {
    root: true,
    extends: ['@packages/eslint-config/react.js'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    ignorePatterns: ['node_modules', 'dist'],
    overrides: [
    {
      files: ["types/**/*"],
      excludedFiles: "*.ts",
    },
  ],
}
