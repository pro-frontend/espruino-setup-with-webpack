module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["import"],
  env: {
    jest: true,
  },
  rules: {
    "no-param-reassign": 0,
    "linebreak-style": ["off"],
    indent: ["error", 2],
    "implicit-arrow-linebreak": 0,
    "no-undef": ["error"],
    "function-paren-newline": 0,
    "spaced-comment": 0,
    "comma-dangle": ["error", "always-multiline"],
    "no-extra-boolean-cast": 0,
    "quote-props": 0,
    "object-curly-spacing": ["error", "always"],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    camelcase: 0,
    "no-nested-ternary": 0,
    "object-curly-newline": 0,
    "operator-linebreak": 0,
    "no-unused-expressions": 0,
    "no-unused-vars": ["error", { varsIgnorePattern: "^[set]" }],
    "global-require": 0,
    "max-len": 0,
    "import/no-cycle": 0,
    "no-underscore-dangle": 0,
    "no-return-assign": 0,
    "import/prefer-default-export": 0,
    "no-console": "error",
    "arrow-parens": 0,
    "eol-last": 0,
    "consistent-return": 0,
    semi: ["error", "always"],
    "no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: false },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};
