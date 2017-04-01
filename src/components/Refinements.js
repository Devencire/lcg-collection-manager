import React from 'react'
import EnactableRefinement from '../containers/EnactableRefinement'

const Refinements = ({ cardsets, refinements }) => (
    <ul>
        {refinements.map(refinement =>
            <EnactableRefinement
                key={refinement.get('source') + refinement.get('destination')}
                source={cardsets.get(refinement.get('source'))}
                destination={cardsets.get(refinement.get('destination'))}
                cards={refinement.get('cards')}/>
        )}
    </ul>
)

export default Refinements
