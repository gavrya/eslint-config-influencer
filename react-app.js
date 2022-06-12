// const rules = require('./rules');

module.exports = {
  extends: [
    './presets/airbnb-react',
    './presets/typescript',
    './presets/promise',
    './presets/jest',
    // './presets/testing-library',
    './presets/prettier',
  ].map(require.resolve),
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
};
