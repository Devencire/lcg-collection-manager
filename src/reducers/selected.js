import Immutable from 'immutable'

const startState = Immutable.Map()

const selected = (state = startState, action) => {
    switch (action.type) {
        case 'SELECT_COLLECTION':
            return Immutable.Map({type: 'collection', id: action.id})
        case 'SELECT_DECK':
            return Immutable.Map({type: 'deck', id: action.id})
        case 'SELECT_REFINEMENT':
            return Immutable.Map({type: 'refinement', refinement: action.refinement})
        default:
            return state
    }
}

export default selected
