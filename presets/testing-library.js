module.exports = {
  overrides: [
    {
      // files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      files: ['*.{spec,test}.*'],
      plugins: ['testing-library'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
