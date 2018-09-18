
module.exports = {
  rules: {
    "arrow-parens": [2, "always"],
    "class-methods-use-this": 0,
    "comma-dangle": [2, "only-multiline"],
    "implicit-arrow-linebreak": 0,
    "import/prefer-default-export": 0,

    "jsx-a11y/alt-text": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["label"],
        labelAttributes: ["htmlFor"],
        controlComponents: ["input", "select"]
      }
    ],
    "max-len": [2, { code: 80, ignoreComments: true,  ignoreStrings: true }],
    "no-confusing-arrow": 0,

    "prettier/prettier": [2],
    "quotes": [2, "double"],

    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/require-default-props": 0
  },
  parser: "babel-eslint",
  extends: ["airbnb", "plugin:prettier/recommended"],
  plugins: ["prettier", "react", "jsx-a11y"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./webpack.config.js"
      }
    }
  }
};
