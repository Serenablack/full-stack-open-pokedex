module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
    node: true,
    'cypress/globals': true
  },
  extends: ["eslint:recommended",
  // {
  //   "globals": {
  //     "cy": true
  //   }
  // } ,
  "plugin:react/recommended"],
  
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest","cypress"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": 0,
    quotes: ["error", "single"],
    semi: [0, "always"],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": 0,
    "react/prop-types": 0,
  },
};
