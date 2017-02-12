import Immutable from 'immutable'

const startState = Immutable.fromJS({
    "cards": {}
})

const sections = (state = startState, action) => {
    switch (action.type) {
        case "SET_DEFINITIONS":
            return Immutable.fromJS(action.definitions)
        default:
            return state
    }
}

export default sections
