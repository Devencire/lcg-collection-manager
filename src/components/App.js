import React from 'react';
// import './App.css';
import CurrentCollections from '../containers/CurrentCollections'
import { ActiveDecks, InactiveDecks } from '../containers/DeckContainers'
import ImportDeck from '../containers/ImportDeck'
import SuggestedRefinements from '../containers/SuggestedRefinements'

const App = () => (
    <div>
        <h1>GRNDL Refinery</h1>
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
            <li>
                Refinements
                <SuggestedRefinements />
            </li>
        </ul>
        <ImportDeck />
    </div>
)

export default App;
