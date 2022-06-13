# Influencer ESLint shareable configs

## Node app ESLint config

Install `eslint-config-influencer` package directly from the git repo:

```sh
yarn add -D https://{repo_url}/eslint-config-influencer.git#commithash_or_tag
```

Install peer dependencies of the `eslint-config-influencer` package:

```sh
yarn add -D eslint@^8.16.0\
prettier@^2.6.2\
@typescript-eslint/eslint-plugin@^5.27.0\
@typescript-eslint/parser@^5.27.0\
eslint-config-airbnb-base@^15.0.0\
eslint-config-airbnb-typescript@^17.0.0\
eslint-config-prettier@^8.5.0\
eslint-plugin-import@^2.26.0\
eslint-plugin-jest@^26.4.6\
eslint-plugin-prettier@^4.0.0\
eslint-plugin-promise@^6.0.0
```

Create `.eslintrc.js` file in the root of your project:

```javascript
module.exports = {
  extends: ['influencer/node-app'],
}
```

## React app ESLint config

Install `eslint-config-influencer` package directly from the git repo:

```sh
yarn add -D https://{repo_url}/eslint-config-influencer.git#commithash_or_tag
```

Install peer dependencies of the `eslint-config-influencer` package:

```sh
yarn add -D eslint@^8.16.0\
prettier@^2.6.2\
@typescript-eslint/eslint-plugin@^5.27.0\
@typescript-eslint/parser@^5.27.0\
eslint-config-airbnb@^19.0.4\
eslint-config-airbnb-base@^15.0.0\
eslint-config-airbnb-typescript@^17.0.0\
eslint-config-prettier@^8.5.0\
eslint-plugin-import@^2.26.0\
eslint-plugin-jest@^26.4.6\
eslint-plugin-jsx-a11y@^6.5.1\
eslint-plugin-prettier@^4.0.0\
eslint-plugin-promise@^6.0.0\
eslint-plugin-react@^7.30.0\
eslint-plugin-react-hooks@^4.5.0\
eslint-plugin-testing-library@^5.5.1
```

Create `.eslintrc.js` file in the root of your project:

```javascript
module.exports = {
  extends: ['influencer/react-app'],
}
```

## React Native app ESLint config

Install `eslint-config-influencer` package directly from the git repo:

```sh
yarn add -D https://{repo_url}/eslint-config-influencer.git#commithash_or_tag
```

Install peer dependencies of the `eslint-config-influencer` package:

```sh
yarn add -D eslint@^8.16.0\
prettier@^2.6.2\
@typescript-eslint/eslint-plugin@^5.27.0\
@typescript-eslint/parser@^5.27.0\
eslint-config-airbnb@^19.0.4\
eslint-config-airbnb-base@^15.0.0\
eslint-config-airbnb-typescript@^17.0.0\
eslint-config-prettier@^8.5.0\
eslint-plugin-import@^2.26.0\
eslint-plugin-jest@^26.4.6\
eslint-plugin-jsx-a11y@^6.5.1\
eslint-plugin-prettier@^4.0.0\
eslint-plugin-promise@^6.0.0\
eslint-plugin-react@^7.30.0\
eslint-plugin-react-hooks@^4.5.0\
eslint-plugin-testing-library@^5.5.1\
eslint-plugin-react-native@^4.0.0
```

Create `.eslintrc.js` file in the root of your project:

```javascript
module.exports = {
  extends: ['influencer/react-native-app'],
}
```

## How to check which rules and plugins will be applied to the specific file:

```sh
{path_to_eslint}/eslint --print-config {path-to-some-file.ts} > eslint_config_report.json
```
