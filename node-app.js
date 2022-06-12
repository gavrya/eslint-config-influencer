module.exports = {
  extends: [
    './presets/airbnb',
    // './presets/typescript',
    './presets/promise',
    './presets/jest',
    './presets/prettier',
  ].map(require.resolve),
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
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
