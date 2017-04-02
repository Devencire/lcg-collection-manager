import React from 'react'
import './CardImage.css';
import { cardName, cardImageURL, isRunnerCard } from '../cards'

const CardImage = ({ cardCode }) => (
    <div style={{backgroundImage: "url(" + cardImageURL(cardCode) + ")"}}
         alt={cardName(cardCode)}
         className={'CardImage ' + (isRunnerCard(cardCode) ? 'CardImageRunner' : 'CardImageCorp')}/>
)

export default CardImage
