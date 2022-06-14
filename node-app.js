module.exports = {
  extends: [
    './presets/airbnb',
    './presets/import',
    './presets/promise',
    './presets/jest',
    './presets/influencer',
    './presets/prettier',
  ].map(require.resolve),
};
