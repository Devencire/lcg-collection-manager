const uuid = require('uuid/v4')

export const setDefinitions = definitions => ({
    type: 'SET_DEFINITIONS',
    definitions
})

export const createCollection = (name, cardQuantities) => ({
    type: 'CREATE_COLLECTION',
    id: uuid(),
    name,
    cardQuantities
})

export const createDeck = (name, identityCardCode, cardQuantities) => ({
    type: 'CREATE_DECK',
    id: uuid(),
    name,
    identityCardCode,
    cardQuantities
})
