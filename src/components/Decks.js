import React from 'react'

import InformedDeck from "../containers/InformedDeck"

const Decks = ({ decks, cardsets }) => {
    return (
        <ul>
            {decks.map(deckId =>
                <InformedDeck
                    key={deckId}
                    deck={cardsets.get(deckId)}/>
            )}
        </ul>
    )
}

export default Decks
