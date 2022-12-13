import { createRequire } from 'module'
const require = createRequire(import.meta.url)

import { foo } from './foo'

import './bar'

import * as e1def from 'e1/a/b/c'

import * as e1root from 'e1'

import {x} from 'e3/x/x.js'

import {xx} from 'e3/x/xx.js'

import {y} from 'e3/y/y.js'

import z from 'e3/z'

import zz from 'e3'

export { x, xx, y, z, zz }

export { default as json } from './json-data.json' assert {type: 'json'}

const { e1 } = e1def

const { e1: e1x } = e1root

export { e1, e1x }

export { m1 } from 'm1'

export { m1 as m1x } from 'm1/index'

export { e2 } from 'e2'

export { e2 as es3 } from 'e2/index'

export { e2 as es4 } from 'e2/alias'

export { e2foo } from 'e2/foo'

export { e2bar } from 'e2/bar-bundle'

export * from './foo'

export * from './baz'

export * from './q/u/x'

export const foobaz = foo + 'baz'

export { foo as foo1 } from './foo.js'

export const foo2 = await import('./foo')

export { qux } from './qux.js'

export const dirname = __dirname

export const filename = __filename

export const rfoo = require('e1/a/b/c')

export * from './only-types'

console.log(foobaz)
