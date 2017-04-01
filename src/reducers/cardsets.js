import Immutable from 'immutable'
import {
    cardType, isRunnerCard, defaultRunnerIdentity, defaultCorpIdentity
} from '../cards'

const startState = Immutable.Map()

const collection = ({id, name, cards}) => {
    return Immutable.fromJS({
        id: id,
        type: 'collection',
        name: name,
        template: cards,
        contents: cards
    })
}

const pickIdentityFromCards = cardCodes => {
    const identities = cardCodes.filter(code => cardType(code) === 'identity')
    return identities[0] ? identities[0] : (
        isRunnerCard(cardCodes[0]) ? defaultRunnerIdentity : defaultCorpIdentity
    )
}

const deck = ({id, name, cards}) => Immutable.fromJS({
    id: id,
    type: 'deck',
    name: name,
    identityCardCode: pickIdentityFromCards(Object.keys(cards)),
    template: cards,
    contents: {}
})

const addCards = cards => cardset => (
    cardset.update('contents', contents => contents.mergeWith(
        (current, additional) => current + additional,
        cards
    ))
)
const removeCards = cards => addCards(cards.map(quantity => -quantity))

const cardsets = (state = startState, action) => {
    switch (action.type) {
        case 'CREATE_COLLECTION':
            return state.set(action.id, collection(action))
        case 'CREATE_DECK':
            return state.set(action.id, deck(action))
        case 'ENACT_REFINEMENT':
            return (
                state
                .update(action.source, removeCards(action.cards))
                .update(action.destination, addCards(action.cards))
            )
        default:
            return state
    }
}

export default cardsets
