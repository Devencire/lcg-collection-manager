import React from 'react'

const Deck = ({ deck, cardInfo }) => {
    console.log(cardInfo)
    const sumCardProperty = prop => (
        deck.get("cardQuantities")
        .reduce((total, quantities) => total + quantities.get(prop), 0)
    )
    return (
        <li>
            {deck.get("name")}
            [{cardInfo.getIn([deck.get("identityCardCode"), "title"])}]
            ({sumCardProperty('current')} / {sumCardProperty('maximum')})
            <ul>
                {deck.get("cardQuantities").map((quantities, cardCode) => (
                    <li key={cardCode}>
                        {cardCode}: {quantities.get('current')} / {quantities.get('maximum')}
                    </li>
                )).valueSeq()}
            </ul>
        </li>
    )
}

export default Deck
