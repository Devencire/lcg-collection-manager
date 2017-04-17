import React from 'react'
import { connect } from 'react-redux'
import { selectDeck } from '../actions'
import CardImage from './CardImage'
import './Deck.css'

const sum = (a, b) => a + b

const Deck = ({ deck, selectDeck }) => (
    <li className="Deck" onClick={selectDeck}>
        <div className="DeckTitle">
            {deck.get('name')}
        </div>
        <div>
            {deck.get('contents').reduce(sum, 0)}
            /
            {deck.get('template').reduce(sum, 0)}
        </div>
        <CardImage cardCode={deck.get('identityCardCode')}/>
    </li>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectDeck: () => {
        dispatch(selectDeck(ownProps.deck))
    }
})

export default connect(null, mapDispatchToProps)(Deck)
