import { combineReducers } from 'redux-immutable'
import cardsets from './cardsets'
import sections from './sections'

const reducers = combineReducers({
    cardsets,
    sections
})

export default reducers
