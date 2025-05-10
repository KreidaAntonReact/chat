require('@packages/eslint-config/patch');

module.exports = {
    root: true,
    extends: ['@packages/eslint-config/react.js'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                    ['sidebar/sidebarApp', './apps/frontend/sidebar/src/app/app.tsx'],
                ],
                extensions: ['.js', '.jsx', '.ts', '.tsx'], // Аналогично Webpack
            },
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    ignorePatterns: ['node_modules', 'dist'],
    rules: {
        'import/no-unresolved': ['error', { ignore: ['^vue_sidebar/'] }]
    }
}
