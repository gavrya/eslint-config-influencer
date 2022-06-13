module.exports = {
  extends: [
    './presets/import',
    './presets/airbnb-react',
    './presets/promise',
    './presets/jest',
    './presets/testing-library',
    './presets/influencer',
    './presets/influencer-react',
    './presets/prettier',
  ].map(require.resolve),
};
