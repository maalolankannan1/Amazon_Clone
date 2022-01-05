module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  // parserOptions: {
  //   "ecmaVersion": 7,
  //   "sourceType": "module",
  //   "ecmaFeatures": {
  //     "jsx": true,
  //   }
  // },
  // "ecmaVersion": 8,
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
};
