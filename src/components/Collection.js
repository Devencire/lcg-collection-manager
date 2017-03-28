import React from 'react'
import { cardName } from '../cards'

const CardList = ({ collection }) => {
    const cardQuantities = collection.get("cardQuantities").sortBy((_, code) => code)
    return (
        <ul>
            {cardQuantities.map((quantities, cardCode) => (
                <li key={cardCode}>
                    {cardName(cardCode)}:
                    {quantities.get('current')} / {quantities.get('maximum')}
                </li>
            )).valueSeq()}
        </ul>
    )
}

const Collection = ({ collection }) => {
    const sumCardProperty = prop => (
        collection.get("cardQuantities")
        .reduce((total, quantities) => total + quantities.get(prop), 0)
    )
    return (
        <li>
            {collection.get("name")}
            ({sumCardProperty('current')} / {sumCardProperty('maximum')})
        </li>
    )
}

export default Collection
