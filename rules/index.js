const rules = {
  semi: 0,
  'react/jsx-filename-extension': [
    1,
    {
      extensions: ['.js', '.tsx'],
    },
  ],
  'react/no-unused-prop-types': 0,
  'react/destructuring-assignment': 0,
  'import/no-extraneous-dependencies': 0,
  '@typescript-eslint/prefer-regexp-exec': 0,
  // added after packages upgrade
  'react-hooks/exhaustive-deps': 0, // investigate
  '@typescript-eslint/no-unsafe-assignment': 0, // investigate
  '@typescript-eslint/no-unsafe-call': 0, // investigate
  '@typescript-eslint/no-unsafe-member-access': 0, // investigate
  '@typescript-eslint/no-floating-promises': 0, // investigate
  '@typescript-eslint/no-unsafe-return': 0, // investigate
  '@typescript-eslint/ban-types': 0, // investigate
  // influencer
  'import/prefer-default-export': 'off', // ok
  'react/require-default-props': 'off', // disabled in eslint-config-react-app
  'import/no-unresolved': 'off', // problem with react-app alias imports! import from 'components/campaignButton'
  'import/extensions': 'off',
  'react/function-component-definition': 'off',
  'no-shadow': 'off',
  'no-use-before-define': 'off', // check later
  'react/jsx-props-no-spreading': 'off', // discuss with the team
  'consistent-return': 'off',
  'react/react-in-jsx-scope': 'off', // enable in config later!!!
  // warn in develop, error in production
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  'react/button-has-type': 'off', // discuss with the team
  'react/no-array-index-key': 'off', // discuss with the team
  'no-plusplus': 'off', // discuss with the team
  'jsx-a11y/click-events-have-key-events': 'off', // check later
  'jsx-a11y/no-static-element-interactions': 'off', // check later
  'no-unsafe-optional-chaining': 'off', // enable later
  '@typescript-eslint/restrict-template-expressions': 'off', // check later
  // from eslint-config-react-app
  'no-restricted-syntax': ['warn', 'WithStatement'],
  'no-param-reassign': 'off', // enable later
  'promise/always-return': 'off', // discuss with the team
  'promise/catch-or-return': 'off', // discuss with the team
  'prefer-promise-reject-errors': 'off', // discuss with the team
  'react/no-unescaped-entities': 'off', // discuss with the team
  'jsx-a11y/label-has-associated-control': 'off', // investigate
  // from eslint-config-react-app
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],
  'react/no-unstable-nested-components': 'off', // discuss with the team
  'no-prototype-builtins': 'off', // discuss with the team
  'guard-for-in': 'off', // discuss with the team
  'no-restricted-globals': 'off', // discuss with the team
  radix: 'off', // discuss with the team
};

module.exports = rules;
