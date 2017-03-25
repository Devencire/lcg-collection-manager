const uuid = require('uuid/v4')

export const createCollection = (name, cardQuantities) => ({
    type: 'CREATE_COLLECTION',
    id: uuid(),
    name,
    cardQuantities
})

export const createDeck = (name, cardQuantities) => ({
    type: 'CREATE_DECK',
    id: uuid(),
    name,
    cardQuantities
})

export const importDeck = (url) => ({
    type: 'IMPORT_DECK',
    url
})
