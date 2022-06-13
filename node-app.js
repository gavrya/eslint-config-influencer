module.exports = {
  extends: [
    './presets/import',
    './presets/airbnb',
    './presets/promise',
    './presets/jest',
    './presets/influencer',
    './presets/prettier',
  ].map(require.resolve),
};
