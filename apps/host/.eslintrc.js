require('@packages/eslint-config/patch');

module.exports = {
    root: true,
    extends: ['@packages/eslint-config'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    ignorePatterns: ['node_modules', 'dist'],
}
