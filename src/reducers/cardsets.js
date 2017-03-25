import Immutable from 'immutable'
import {
    cardType, isRunnerCard, defaultRunnerIdentity, defaultCorpIdentity
} from '../cards'

const startState = Immutable.Map()

const collection = ({name, cardQuantities}) => Immutable.Map({
    type: 'collection',
    name: name,
    cardQuantities: (
        Immutable.fromJS(cardQuantities)
        .map(quantity => Immutable.Map({'maximum': quantity, 'current': quantity}))
    )
})

const pickIdentityFromCards = cardCodes => {
    const identities = cardCodes.filter(code => cardType(code) === 'identity')
    return identities[0] ? identities[0] : (
        isRunnerCard(cardCodes[0]) ? defaultRunnerIdentity : defaultCorpIdentity
    )
}

const deck = ({name, cardQuantities}) => Immutable.Map({
    type: 'deck',
    name: name,
    identityCardCode: pickIdentityFromCards(Object.keys(cardQuantities)),
    cardQuantities: (
        Immutable.fromJS(cardQuantities)
        .map(quantity => Immutable.Map({'maximum': quantity, 'current': 0}))
    )
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
