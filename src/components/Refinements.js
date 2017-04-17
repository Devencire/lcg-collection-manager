import React from 'react'
import { connect } from 'react-redux'
import Refinement from '../components/Refinement'

const Refinements = ({ cardsets, refinements }) => (
    <div>
        {refinements.map(refinement =>
            <Refinement
                key={refinement.get('source') + refinement.get('destination')}
                source={cardsets.get(refinement.get('source'))}
                destination={cardsets.get(refinement.get('destination'))}
                cards={refinement.get('cards')}/>
        )}
    </div>
)

const mapStateToProps = (state) => ({
    cardsets: state.get('cardsets'),
    refinements: state.get('refinements')
})

export default connect(mapStateToProps)(Refinements)
