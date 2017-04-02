import React from 'react'
// import { cardName } from '../cards'

// const CardList = ({ collection }) => {
//     const cardQuantities = collection.get("cardQuantities").sortBy((_, code) => code)
//     return (
//         <ul>
//             {cardQuantities.map((quantities, cardCode) => (
//                 <li key={cardCode}>
//                     {cardName(cardCode)}:
//                     {quantities.get('current')} / {quantities.get('maximum')}
//                 </li>
//             )).valueSeq()}
//         </ul>
//     )
// }

const Collection = ({ collection }) => {
    const sum = (a, b) => a + b
    return (
        <div>
            {collection.get("name")}
            ({collection.get('contents').reduce(sum)}
            / {collection.get('template').reduce(sum)})
        </div>
    )
}

export default Collection
