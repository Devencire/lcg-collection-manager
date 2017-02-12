import { combineReducers } from 'redux-immutable'
import cardsets from './cardsets'
import sections from './sections'
import definitions from './definitions'

const reducers = combineReducers({
    definitions,
    cardsets,
    sections
})

export default reducers
