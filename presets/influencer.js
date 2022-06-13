const prettierOptions = require('../.prettierrc');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  rules: {
    // eslint
    // https://influenceruk.atlassian.net/wiki/spaces/IN/pages/2053308417/Use+Semicolons+-+JS+-+RFC
    semi: ['error', 'always'],
    // https://influenceruk.atlassian.net/wiki/spaces/IN/pages/2047541251/No+errors+warnings+logs+info+in+console+-+JS+-+RFC
    'no-console': isProd ? 'error' : 'warn',
    'no-debugger': isProd ? 'error' : 'warn',
    // plugin: import
    'import/prefer-default-export': 'off',
    // plugin: prettier
    'prettier/prettier': [
      'error',
      prettierOptions,
      {
        usePrettierrc: false,
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // plugin: @typescript-eslint/eslint-plugin
        // https://influenceruk.atlassian.net/wiki/spaces/IN/pages/2079457281/Event+handler+should+not+return+a+promise+-+JS+-+RFC
        '@typescript-eslint/no-misused-promises': 'error',
      },
    },
  ],
};
