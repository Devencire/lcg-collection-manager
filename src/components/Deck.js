import React from 'react'
import CardImage from './CardImage'
import { cardName } from '../cards'

const Deck = ({ deck }) => {
    const sumCardProperty = prop => (
        deck.get("cardQuantities")
        .reduce((total, quantities) => total + quantities.get(prop), 0)
    )
    const cardQuantities = deck.get("cardQuantities").sortBy((_, code) => code)
    return (
        <li>
            {deck.get("name")}
            [{cardName(deck.get("identityCardCode"))}]
            ({sumCardProperty('current')} / {sumCardProperty('maximum')})
            <CardImage cardCode={deck.get("identityCardCode")}/>
            <ul>
                {cardQuantities.map((quantities, cardCode) => (
                    <li key={cardCode}>
                        {quantities.get('current')}/{quantities.get('maximum')}
                        &nbsp;{cardName(cardCode)}
                    </li>
                )).valueSeq()}
            </ul>
        </li>
    )
}

export default Deck
