import { connect } from 'react-redux'
import Refinement from '../components/Refinement'
import { enactRefinement } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
    enactRefinement: () => {
        console.log("ownProps", ownProps)
        dispatch(enactRefinement({
            source: ownProps.source.get('id'),
            destination: ownProps.destination.get('id'),
            cards: ownProps.cards
        }))
    }
})

const EnactableRefinement = connect(null, mapDispatchToProps)(Refinement)

export default EnactableRefinement
