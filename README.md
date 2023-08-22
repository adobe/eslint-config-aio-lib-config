<!--
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
-->

# eslint-config-aio-lib-config

Shareable ESLint config for AIO libs

## Publishing (!!!!)

Any update to a dependency/peer dependency *must* be a major version update, if not a lot of tests will break during `npm install` because of a version mismatch. Use of semver is warranted here so users can choose when to update their config instead of it being forced on them. The 2.x update broke a lot of tests.

## Installation

To install, use `npm 5` or greater:

```bash
npm install --save-dev @adobe/eslint-config-aio-lib-config
npx install-peerdeps --dev @adobe/eslint-config-aio-lib-config
```

## Add to the root `.eslintrc.json` file

Add this to your `.eslintrc.json` file in the root of your module:

```json
{
  "extends": "@adobe/eslint-config-aio-lib-config"
}
```

## Exclude test/e2e folders from the `node/no-unpublished-require` rule

The [node/no-unpublished-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md) rule prevents using a module when it hasn't been added in the `dependencies` key in `package.json`.
This setting excludes this rule for test folders, where the module may have been added in the `devDependencies` key in `package.json` only.

Add this setting to a `.eslintrc.json` file in the affected folder:

```json
{
    "rules": {
        "node/no-unpublished-require": 0
    }
}
```

