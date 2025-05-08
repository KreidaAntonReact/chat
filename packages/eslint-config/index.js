module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
    }
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "unused-imports"
  ],
  rules: {
    // Базовые правила для typescript
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",

    // Стилизация кода
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "always"],
    "block-spacing": "error",
    "comma-dangle": ["error", "only-multiline"],
    "eol-last": ["error", "always"],
    "function-paren-newline": ["error", "consistent"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "max-len": ["warn", { "code": 160, "ignoreUrls": true }],
    "multiline-ternary": ["error", "always-multiline"],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 0 }],
    "quotes": ["error", "single", { "avoidEscape": true }],
    "semi": ["error", "always"],

    // Стиль объектов
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ObjectPattern": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ImportDeclaration": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ExportDeclaration": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        }
      }
    ],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": [
      "error",
      {
        "allowAllPropertiesOnSameLine": true
      }
    ],

    // Импорты
    "import/no-unresolved": "error",
    "import/no-cycle": "error",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent"],
          "index",
          "object",
          "type"
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "import/no-useless-path-segments": [
      "error",
      {
        "noUselessIndex": true
      }
    ],
    "import/newline-after-import": ["error", { "count": 1 }],
    "import/exports-last": "error",

    // Неиспользуемые импорты
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],

    // Отладка
    "no-console": [
      "warn",
      {
        "allow": ["warn", "error"]
      }
    ]
  },
}
