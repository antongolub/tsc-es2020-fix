import {foo} from './foo'

export * from './foo'

export * from './baz'

export const baz = foo + 'baz'

export const dirname = __dirname

export const filename = __filename
