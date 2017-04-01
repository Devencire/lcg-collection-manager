import React from 'react'
import CardImage from './CardImage'
import { cardName } from '../cards'

const Deck = ({ deck }) => {
    const sum = (a, b) => a + b
    // const cardQuantities = deck.get("cardQuantities").sortBy((_, code) => code)
    return (
        <li>
            {deck.get("name")}
            [{cardName(deck.get("identityCardCode"))}]
            ({deck.get('contents').reduce(sum, 0)} / {deck.get('template').reduce(sum, 0)})
            <CardImage cardCode={deck.get("identityCardCode")}/>
            <ul>
                {deck.get('template').map((required, cardCode) => (
                    <li key={cardCode}>
                        {deck.getIn(['contents', cardCode], 0)} / {required}
                        &nbsp;{cardName(cardCode)}
                    </li>
                )).valueSeq()}
            </ul>
        </li>
    )
}

export default Deck
