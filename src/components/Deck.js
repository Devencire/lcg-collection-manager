import React from 'react'
import CardImage from './CardImage'
import "./Deck.css"
// import { cardName } from '../cards'

/*
<CardList
    template={deck.get('template')}
    contents={deck.get('contents')}/>
*/
// const CardList = ({template, contents}) => (
//     <ul>
//         {template.map((required, cardCode) => (
//             <li key={cardCode}>
//                 {contents.get(cardCode, 0)} / {required} {cardName(cardCode)}
//             </li>
//         )).valueSeq()}
//     </ul>
// )

const sum = (a, b) => a + b

const Deck = ({ deck }) => (
    <li className="Deck">
        <div className="DeckTitle">
            {deck.get("name")}
        </div>
        <div>
            {deck.get('contents').reduce(sum, 0)} / {deck.get('template').reduce(sum, 0)}
        </div>
        <CardImage cardCode={deck.get("identityCardCode")}/>
    </li>
)

export default Deck
