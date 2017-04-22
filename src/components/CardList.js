import React from 'react'
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

export default CardList
