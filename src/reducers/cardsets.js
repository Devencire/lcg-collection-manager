import Immutable from 'immutable'

const startState = Immutable.Map()

const collection = ({name, cardQuantities}) => Immutable.Map({
    type: 'collection',
    name: name,
    cardQuantities: Immutable.fromJS(cardQuantities)
})

const deck = ({name, identityCardCode, cardQuantities}) => Immutable.Map({
    type: 'deck',
    name: name,
    identityCardCode: identityCardCode,
    cardQuantities: Immutable.fromJS(cardQuantities)
})

const cardsets = (state = startState, action) => {
    switch (action.type) {
        case 'CREATE_COLLECTION':
            return state.set(
                action.id,
                collection(action)
            )
        case 'CREATE_DECK':
            return state.set(
                action.id,
                deck(action)
            )
        default:
            return state
    }
}

export default cardsets
