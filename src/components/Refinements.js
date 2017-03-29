import React from 'react'
import { cardName } from '../cards'

const Refinement = ({ source, destination, cards }) => (
    <li>
        {source.get('name')} > {destination.get('name')}:
        <ul>
            {cards.map((v, k) => <li>{v} {cardName(k)}</li>)}
        </ul>
    </li>
)

const Refinements = ({ cardsets, refinements }) => (
    <ul>
        {refinements.map(refinement =>
            <Refinement
                key={refinement.get('source') + refinement.get('destination')}
                source={cardsets.get(refinement.get('source'))}
                destination={cardsets.get(refinement.get('destination'))}
                cards={refinement.get('cards')}/>
        )}
    </ul>
)

export default Refinements
