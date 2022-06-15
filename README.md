# Influencer ESLint shareable configs

This package provides a sharable ESLint and Prettier config for Node, React and React-Native projects

## Usage

Install `eslint-config-influencer` package directly from the git repo:

```sh
yarn add -D https://{repo_url}/eslint-config-influencer.git#commithash_or_tag
```

Install peer dependencies required by `eslint-config-influencer` package:

```sh
yarn add -D eslint@^8.16.0 prettier@^2.6.2
```

## Node app:

Create `.eslintrc.js` file in the root of your project:

```javascript
module.exports = {
  extends: ['influencer/node-app'],
};
```

## React app:

Create `.eslintrc.js` file in the root of your project:

```javascript
module.exports = {
  extends: ['influencer/react-app'],
};
```

## React-Native app:

Create `.eslintrc.js` file in the root of your project:

```javascript
module.exports = {
  extends: ['influencer/react-native-app'],
};
```

## Use shared prettier config

Create `.prettier.js` file in the root of your project:

```javascript
module.exports = require('eslint-config-influencer/.prettier.js');

```

## How to check which rules and plugins will be applied to a specific file:

```sh
{path_to_eslint}/eslint --print-config {path-to-some-file.ts} > eslint_config_report.json
```
