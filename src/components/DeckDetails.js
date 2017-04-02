import React from 'react'
import './DeckDetails.css'
import { cardName } from '../cards'

const CardList = ({template, contents}) => (
    <ul>
        {template.map((required, cardCode) => (
            <li key={cardCode}>
                {contents.get(cardCode, 0)} / {required} {cardName(cardCode)}
            </li>
        )).valueSeq()}
    </ul>
)

const DeckDetails = ({deck}) => (
    <div className="DeckDetails">
        <h3>{deck.get('name')}</h3>
        <CardList
            template={deck.get('template')}
            contents={deck.get('contents')} />
    </div>
)

export default DeckDetails
