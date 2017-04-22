/* eslint-env jest */

import { cardsInPack, quantitiesOfCards } from './index'

describe('cardsInPack', () => {
    it('should provide quantities for all cards in the core set', () => {
        let cardCodes = quantitiesOfCards(cardsInPack('core'))
        // 113 unique cards
        expect(Object.values(cardCodes).length).toEqual(113)
        // 248 cards
        expect(Object.values(cardCodes).reduce((total, num) => total + num, 0))
        .toBe(248)
        // including 1 copy of Noise
        expect(cardCodes['01001']).toBe(1)
        // and 3 copies of Accelerated Beta Test
        expect(cardCodes['01062']).toBe(3)
    })
})
