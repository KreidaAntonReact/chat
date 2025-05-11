require('@packages/eslint-config/patch');

module.exports = {
    root: true,
    extends: ['@packages/eslint-config/vue.js'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
     settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                ],
                extensions: ['.js', '.ts', '.vue'],
            },
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    ignorePatterns: ['node_modules', 'dist'],
}
