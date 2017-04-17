import React from 'react'
import { connect } from 'react-redux'
import Deck from '../components/Deck'
import './Decks.css'

const Decks = ({ decks, cardsets }) => (
    <div className="Decks">
        {decks.map(deckId =>
            <Deck
                key={deckId}
                deck={cardsets.get(deckId)}/>
        )}
    </div>
)

const mapStateToProps = sectionPrefix => state => ({
    decks: state.getIn(['sections', sectionPrefix + 'Decks']),
    cardsets: state.get('cardsets')
})

const ActiveDecks = connect(mapStateToProps('active'))(Decks)

const InactiveDecks = connect(mapStateToProps('inactive'))(Decks)

export { ActiveDecks, InactiveDecks }
