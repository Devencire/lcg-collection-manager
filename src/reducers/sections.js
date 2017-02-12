import Immutable from 'immutable'

const startState = Immutable.fromJS({
    "collections": [],
    "activeDecks": [],
    "inactiveDecks": []
})

const sections = (state = startState, action) => {
    switch (action.type) {
        case "CREATE_COLLECTION":
            return state.updateIn(["collections"], list => list.push(action.id))
        case "CREATE_DECK":
            return state.updateIn(['activeDecks'], list => list.push(action.id))
        default:
            return state
    }
}

export default sections
