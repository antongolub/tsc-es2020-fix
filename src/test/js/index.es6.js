// node-engine ^14.13.1 || >=16.0.0

import { fix } from '../../../target/esm'

describe('index (es6)', () => {
  it('has proper export', () => {
    expect(fix).toEqual(expect.any(Function))
  })
})
