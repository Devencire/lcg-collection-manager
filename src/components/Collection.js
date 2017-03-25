import React from 'react'
import { cardName } from '../cards'

const Collection = ({ collection }) => {
    const sumCardProperty = prop => (
        collection.get("cardQuantities")
        .reduce((total, quantities) => total + quantities.get(prop), 0)
    )
    const cardQuantities = collection.get("cardQuantities").sortBy((_, code) => code)
    console.log(cardQuantities)
    return (
        <li>
            {collection.get("name")}
            ({sumCardProperty('current')} / {sumCardProperty('maximum')})
            <ul>
                {cardQuantities.map((quantities, cardCode) => (
                    <li key={cardCode}>
                        {cardName(cardCode)}:
                        {quantities.get('current')} / {quantities.get('maximum')}
                    </li>
                )).valueSeq()}
            </ul>
        </li>
    )
}

export default Collection
