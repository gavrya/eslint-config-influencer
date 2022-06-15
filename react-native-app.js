module.exports = {
  extends: [
    './presets/airbnb-react',
    './presets/react-native',
    './presets/import',
    './presets/promise',
    './presets/jest',
    './presets/testing-library',
    './presets/influencer',
    './presets/influencer-react',
    './presets/prettier',
  ].map(require.resolve),
};
