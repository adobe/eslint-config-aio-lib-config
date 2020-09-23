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

## Installation

To install, use `npm 5` or greater:

```bash
npm install --save-dev @adobe/eslint-config-aio-lib-config
npx install-peerdeps --dev @adobe/eslint-config-aio-lib-config
```

## Add to the root `.eslintrc.json` file

Add this to your `.eslintrc.json` file in the root of your module:
```javascript
{
  "extends": "@adobe/eslint-config-aio-lib-config"
}
```

## Exclude test/e2e folders from the `node/no-unpublished-require` rule

The `node/no-unpublished-require` prevents using a module when it hasn't been added in the `dependencies` key in `package.json`.
This setting excludes this rule for test folders, where the module may have been added in the `devDependencies` key in `package.json` only.

Add this setting to a `.eslintrc.json` file in the affected folder:
```
{
    "rules": {
        "node/no-unpublished-require": 0
    }
}
``

