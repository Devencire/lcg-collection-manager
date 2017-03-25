import React from 'react';
// import './App.css';
import CurrentCollections from '../containers/CurrentCollections'
import { ActiveDecks, InactiveDecks } from '../containers/DeckContainers'
import ImportDeck from '../containers/ImportDeck'

const App = () => (
    <div>
        <ul>
            <li>
                Collections
                <CurrentCollections />
            </li>
            <li>
                Active Decks
                <ActiveDecks />
            </li>
            <li>
                Inactive Decks
                <InactiveDecks />
            </li>
        </ul>
        <ImportDeck />
    </div>
)

export default App;
