/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const { test } = require('node:test')
const assert = require('node:assert/strict')
const config = require('../index')

test('exports a flat config array', () => {
  assert.ok(Array.isArray(config))
  assert.ok(config.length > 0)
  for (const entry of config) {
    assert.strictEqual(typeof entry, 'object')
  }
})

test('includes jsdoc settings', () => {
  const jsdocConfig = config.find(c => c.settings?.jsdoc)
  assert.ok(jsdocConfig, 'jsdoc config entry not found')
  assert.strictEqual(jsdocConfig.settings.jsdoc.ignorePrivate, true)
})
