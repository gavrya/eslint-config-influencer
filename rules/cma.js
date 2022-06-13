const rules = {
  'import/extensions': 'off',
  'import/no-unresolved': 'off', // investigate. problem with react-app alias imports! import from 'components/campaignButton'
  'import/prefer-default-export': 'off', // discuss with the team? disable
  'react/function-component-definition': 'off', // investigate
  '@typescript-eslint/no-unsafe-assignment': 'off', // investigate
  '@typescript-eslint/no-unsafe-call': 'off', // investigate
  'import/no-extraneous-dependencies': 'off', // investigate
  '@typescript-eslint/no-unsafe-member-access': 'off', // investigate
  'react/jsx-props-no-spreading': 'off', // discuss with the team
  'react/require-default-props': 'off', // disabled in eslint-config-react-app
  'no-shadow': 'off',
  'promise/always-return': 'off', // discuss with the team
  'promise/catch-or-return': 'off', // discuss with the team
  'react/react-in-jsx-scope': 'off', // enable in config later!!!
  '@typescript-eslint/no-floating-promises': 'off', // investigate
  'jsx-a11y/label-has-associated-control': 'off', // investigate
  'react/no-unstable-nested-components': 'off', // discuss with the team
  'no-use-before-define': 'off', // check later
  'no-param-reassign': 'off', // enable later
  'react-hooks/exhaustive-deps': 'off', // investigate
  '@typescript-eslint/no-misused-promises': 'off', // enable in config later!!!
  '@typescript-eslint/no-unsafe-return': 'off', // investigate
  'react/button-has-type': 'off', // discuss with the team
  'react/no-array-index-key': 'off', // discuss with the team
  'jsx-a11y/click-events-have-key-events': 'off', // check later
  'jsx-a11y/no-static-element-interactions': 'off', // check later
  'no-plusplus': 'off', // discuss with the team
  '@typescript-eslint/restrict-template-expressions': 'off', // check later
  'consistent-return': 'off',
  'react/destructuring-assignment': 'off',
  '@typescript-eslint/no-unsafe-argument': 'off', // investigate
  '@typescript-eslint/ban-types': 'off', // investigate
  'no-unsafe-optional-chaining': 'off', // enable later
  'prefer-promise-reject-errors': 'off', // discuss with the team
  'react/no-unescaped-entities': 'off', // discuss with the team
  // from eslint-config-react-app
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],
  // from eslint-config-react-app
  'no-restricted-syntax': ['warn', 'WithStatement'],
  'react/no-unused-prop-types': 'off', // investigate
  radix: 'off', // discuss with the team
  'guard-for-in': 'off', // discuss with the team
  'no-prototype-builtins': 'off', // discuss with the team
  'no-restricted-globals': 'off', // discuss with the team
  // activated in airbnb typescript
  '@typescript-eslint/no-unused-vars': 'warn', // activate! change to error

  // CMA
  'no-nested-ternary': 'warn', // investigate
  'jsx-a11y/media-has-caption': 'warn', // investigate
  'default-param-last': 'warn', // investigate
  'valid-typeof': 'warn', // investigate
  'no-bitwise': 'warn', // investigate
  'react/forbid-prop-types': 'warn', // investigate
  'default-case': 'warn', // investigate
  'no-empty': 'warn', // investigate
  'no-await-in-loop': 'warn', // investigate
  'no-return-assign': 'warn', // investigate
};

module.exports = rules;
