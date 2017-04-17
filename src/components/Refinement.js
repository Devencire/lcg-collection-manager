import React from 'react'
import { connect } from 'react-redux'
import { enactRefinement } from '../actions'

const Refinement = ({source, destination, cards, enactRefinement}) => (
    <div onClick={enactRefinement}>
        Move <b>{cards.reduce((a, b) => a + b)}</b> cards
        from <b>{source.get('name')}</b> to <b>{destination.get('name')}</b>
    </div>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
    enactRefinement: () => {
        dispatch(enactRefinement({
            source: ownProps.source.get('id'),
            destination: ownProps.destination.get('id'),
            cards: ownProps.cards
        }))
    }
})

export default connect(null, mapDispatchToProps)(Refinement)
