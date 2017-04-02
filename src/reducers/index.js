import { combineReducers } from 'redux-immutable'
import cardsets from './cardsets'
import sections from './sections'
import selected from './selected'
import annotateWithRefinements from './refinements'

const basicReducers = combineReducers({
    cardsets, sections, selected
})

const reducer = (state, action) => annotateWithRefinements(
    basicReducers(state ? state.delete('refinements') : state, action)
)

export default reducer
