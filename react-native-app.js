module.exports = {
  extends: [
    './presets/react-native',
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
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
    'import/ignore': ['react-native'],
  },
  rules: {
    // 'no-duplicate-imports': 'error',
    // 'import/no-unresolved': 'error',
    // 'import/export': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/no-var-requires': 'off',
    // '@typescript-eslint/ban-ts-ignore': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/camelcase': 'off',
    // 'linebreak-style': ['error', 'unix'], // https://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/
    // semi: ['error', 'always'],
    // 'prettier/prettier': 'error',
    // 'react/display-name': 'off',
    // 'react/no-unescaped-entities': 'off',
    // 'react/jsx-uses-react': 'off',
    // 'react/react-in-jsx-scope': 'off',
    // 'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': ['error'],
    // '@typescript-eslint/no-empty-interface': 'off',
  },
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    AbortController: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    ErrorUtils: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    FileReader: false,
    FormData: false,
    global: false,
    Headers: false,
    Intl: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    queueMicrotask: true,
    URL: false,
    URLSearchParams: false,
    WebSocket: true,
    window: false,
    XMLHttpRequest: false,
  },
};
