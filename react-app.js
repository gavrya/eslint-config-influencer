module.exports = {
  extends: [
    './presets/import',
    './presets/airbnb-react',
    './presets/promise',
    './presets/jest',
    './presets/testing-library',
    './presets/influencer',
    './presets/influencer-react',
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
