import React from 'react'
import './CardImage.css';
import { cardName, cardImageURL } from '../cards'

const CardImage = ({ cardCode }) => (
    <div style={{backgroundImage: "url(" + cardImageURL(cardCode) + ")"}}
         alt={cardName(cardCode)}
         className='card-image'/>
)

export default CardImage
