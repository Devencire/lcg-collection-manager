/* eslint-env jest */

import Immutable from 'immutable'

import { createCollection } from './index'

describe('create collection action', () => {
    it('should generate fresh UUIDs each invocation', () => {
        let action1 = createCollection('collection1', Immutable.Map())
        let action2 = createCollection('collection2', Immutable.Map())
        expect(action1.id).not.toEqual(action2.id)
    })
})
