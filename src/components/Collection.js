import React from 'react'

const Collection = ({ collection }) => {
    const sumCardProperty = prop => (
        collection.get("cardQuantities")
        .reduce((total, quantities) => total + quantities.get(prop), 0)
    )
    return (
        <li>
            {collection.get("name")}
            ({sumCardProperty('current')} / {sumCardProperty('maximum')})
            <ul>
                {collection.get("cardQuantities").map((quantities, cardCode) => (
                    <li key={cardCode}>
                        {cardCode}: {quantities.get('current')} / {quantities.get('maximum')}
                    </li>
                )).valueSeq()}
            </ul>
        </li>
    )
}

export default Collection
