module.exports = {
  extends: ['influencer/react-native-app'],
  rules: {
    // conflicts
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off', // investigate!!!
    'import/no-unresolved': 'off', // investigate!!!
    'import/export': 'off', // investigate!!!
    'import/no-cycle': 'off', // investigate!!!
    'import/no-import-module-exports': 'off', // investigate!!!
    'no-restricted-exports': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/default-props-match-prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'jsx-a11y/alt-text': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    camelcase: 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'promise/catch-or-return': 'off',
    'promise/always-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'react/no-unstable-nested-components': 'off',
    'global-require': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'no-cond-assign': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
  },
  before: {
    'import/no-unresolved': ['error'],
    'import/export': ['off'],
    'import/named': [2],
    'import/namespace': [2],
    'import/default': [2],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
    'import/ignore': ['react-native'],
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  after: {
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        caseSensitive: true,
        caseSensitiveStrict: false,
      },
    ],
    'import/export': ['error'],
    'import/named': ['error'],
    'import/namespace': ['off'],
    'import/default': ['off'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.jsx'],
      },
    },
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
      },
    ],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
};
