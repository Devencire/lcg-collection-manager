import Immutable from 'Immutable'
import * as immutableMatchers from 'jest-immutable-matchers'

import cardsets from './cardsets'

describe('cardsets reducer', () => {
    beforeEach(function () {
        jest.addMatchers(immutableMatchers);
    });
    it('should handle initial state', () => {
        expect(
            cardsets(undefined, {})
        ).toEqualImmutable(Immutable.Map({}))
    })
    it('should handle CREATE_COLLECTION', () => {
        expect(
            cardsets(Immutable.Map(), {
                type: "CREATE_COLLECTION",
                id: "a_uuid",
                name: "collection1",
                cardQuantities: {
                    1001: {maximum: 1, current: 1}
                }
            })
        ).toEqualImmutable(Immutable.fromJS({
            a_uuid: {
                type: "collection",
                name: "collection1",
                cardQuantities: {
                    1001: {maximum: 1, current: 1}
                }
            }
        }))
    })
    it('should handle CREATE_DECK', () => {
        expect(
            cardsets(Immutable.Map(), {
                type: "CREATE_DECK",
                id: "a_uuid",
                name: "deck1",
                identityCardCode: 1001,
                cardQuantities: {
                    1001: {maximum: 1, current: 1}
                }
            })
        ).toEqualImmutable(Immutable.fromJS({
            a_uuid: {
                type: "deck",
                name: "deck1",
                identityCardCode: 1001,
                cardQuantities: {
                    1001: {maximum: 1, current: 1}
                }
            }
        }))
    })
})
