import React from 'react'

import Deck from "../components/Deck"

const Decks = ({ decks, cardsets }) => (
    <ul>
        {decks.map(deckId =>
            <Deck
                key={deckId}
                deck={cardsets.get(deckId)}/>
        )}
    </ul>
)

export default Decks
