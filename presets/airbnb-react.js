module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
      ],
    },
  ],
};

// airbnb: react, jsx-a11y
// airbnb/hooks: react-hooks
