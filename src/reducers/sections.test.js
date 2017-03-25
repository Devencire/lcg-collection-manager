import Immutable from 'Immutable'
import * as immutableMatchers from 'jest-immutable-matchers'

import sections from './sections'

describe('sections reducer', () => {
    beforeEach(function () {
        jest.addMatchers(immutableMatchers);
    });
    it('should handle initial state', () => {
        expect(
            sections(undefined, {})
        ).toEqualImmutable(Immutable.fromJS({
            "collections": [],
            "activeDecks": [],
            "inactiveDecks": []
        }))
    })
    it('should handle CREATE_COLLECTION', () => {
        expect(
            sections(undefined, {
                type: "CREATE_COLLECTION",
                id: "a_uuid",
                name: "collection1",
                cardQuantities: {
                    "01001": {maximum: 1, current: 1}
                }
            })
        ).toEqualImmutable(Immutable.fromJS({
            "collections": ["a_uuid"],
            "activeDecks": [],
            "inactiveDecks": []
        }))
        expect(
            sections(Immutable.fromJS({
                "collections": ["a_uuid"],
                "activeDecks": [],
                "inactiveDecks": []
            }), {
                type: "CREATE_COLLECTION",
                id: "b_uuid",
                name: "collection1",
                cardQuantities: {
                    "01001": {maximum: 1, current: 1}
                }
            })
        ).toEqualImmutable(Immutable.fromJS({
            "collections": ["a_uuid", "b_uuid"],
            "activeDecks": [],
            "inactiveDecks": []
        }))
    })
    it('should handle CREATE_DECK', () => {
        expect(
            sections(undefined, {
                type: "CREATE_DECK",
                id: "a_uuid",
                name: "deck1",
                identityCardCode: "01001",
                cardQuantities: {
                    "01001": {maximum: 1, current: 1}
                }
            })
        ).toEqualImmutable(Immutable.fromJS({
            "collections": [],
            "activeDecks": ["a_uuid"],
            "inactiveDecks": []
        }))
        expect(
            sections(Immutable.fromJS({
                "collections": [],
                "activeDecks": ["a_uuid"],
                "inactiveDecks": []
            }), {
                type: "CREATE_DECK",
                id: "b_uuid",
                name: "deck1",
                identityCardCode: "01001",
                cardQuantities: {
                    "01001": {maximum: 1, current: 1}
                }
            })
        ).toEqualImmutable(Immutable.fromJS({
            "collections": [],
            "activeDecks": ["a_uuid", "b_uuid"],
            "inactiveDecks": []
        }))
    })
})
