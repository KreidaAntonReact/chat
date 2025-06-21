require('@packages/eslint-config/patch');

module.exports = {
    root: true,
    extends: [
        '@packages/eslint-config/react.js',
        "plugin:@tanstack/query/recommended"
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        ecmaFeatures : {
            "jsx" : true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                ],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        "react": {
            "version": "detect"
        }
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    ignorePatterns: ['node_modules', 'dist'],
    rules: {
        'import/no-unresolved': ['error', { ignore: ['^vue_sidebar/'] }],
    }
}
