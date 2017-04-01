const uuid = require('uuid/v4')

export const createCollection = (name, cards) => ({
    type: 'CREATE_COLLECTION',
    id: uuid(),
    name,
    cards
})

export const createDeck = (name, cards) => ({
    type: 'CREATE_DECK',
    id: uuid(),
    name,
    cards
})

export const importDeck = (url) => ({
    type: 'IMPORT_DECK',
    url
})


export const enactRefinement = refinement => ({
    type: 'ENACT_REFINEMENT',
    ...refinement
})
