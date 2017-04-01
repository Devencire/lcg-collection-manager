import React from 'react'
import { cardName } from '../cards'

const Refinement = ({source, destination, cards, enactRefinement}) => (
    <li onClick={enactRefinement}>
        {source.get('name')} > {destination.get('name')}:
        <ul>
            {cards.map((v, k) => (
                <li key={k}>
                    {v} {cardName(k)}
                </li>
            )).valueSeq()}
        </ul>
    </li>
)

export default Refinement
