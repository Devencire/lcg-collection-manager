import { combineReducers } from 'redux-immutable'
import cardsets from './cardsets'
import sections from './sections'
import annotateWithRefinements from './refinements'

const basicReducers = combineReducers({
    cardsets, sections
})

const reducer = (state, action) => annotateWithRefinements(
    basicReducers(state, action)
)

export default reducer
