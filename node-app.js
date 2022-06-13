module.exports = {
  extends: [
    './presets/import',
    './presets/airbnb',
    './presets/promise',
    './presets/jest',
    './presets/prettier',
    './presets/influencer',
  ].map(require.resolve),
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
