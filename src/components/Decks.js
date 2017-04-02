import React from 'react'
import SelectableDeck from "../containers/SelectableDeck"
import "./Decks.css"

const Decks = ({ decks, cardsets }) => (
    <div className="Decks">
        {decks.map(deckId =>
            <SelectableDeck
                key={deckId}
                deck={cardsets.get(deckId)}/>
        )}
    </div>
)

export default Decks
