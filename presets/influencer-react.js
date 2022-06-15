module.exports = {
  rules: {
    // plugin: react
    'react/jsx-props-no-spreading': 'warn', // discuss with the team, set to 'error'
    // enforce to use arrow function for react fc components
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],

    // plugin: jsx-a11y
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // plugin: react
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/default-props-match-prop-types': 'off',
      },
    },
  ],
};
