import React from 'react'
import Deck from "../components/Deck"
import "./Decks.css"

const Decks = ({ decks, cardsets }) => (
    <div className="Decks">
        {decks.map(deckId =>
            <Deck
                key={deckId}
                deck={cardsets.get(deckId)}/>
        )}
    </div>
)

export default Decks
