import React from 'react'

// import { cardName } from '../cards'

/*
<div>
    {cards.map((v, k) => (
        <div key={k}>
            {v} {cardName(k)}
        </div>
    )).valueSeq()}
</div>
*/

const Refinement = ({source, destination, cards, enactRefinement}) => (
    <div onClick={enactRefinement}>
        Move <b>{cards.reduce((a, b) => a + b)}</b> cards
        from <b>{source.get('name')}</b> to <b>{destination.get('name')}</b>
    </div>
)

export default Refinement
