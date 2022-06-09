module.exports = {
  overrides: [
    {
      // files: ['src/jest/__tests__/authorFilter.test.ts', '**/__tests__/**/*', '**/*.{spec,test}.*'],
      files: ['*.{spec,test}.*'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },
  ],
};
