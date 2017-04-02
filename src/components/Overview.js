import React from 'react'
import './Overview.css'
import CurrentCollections from '../containers/CurrentCollections'
import { ActiveDecks, InactiveDecks } from '../containers/DeckContainers'
import ImportDeck from '../containers/ImportDeck'
import SuggestedRefinements from '../containers/SuggestedRefinements'

const Overview = () => (
    <div className="Overview">
        <div>
            <div>
                <h3>Collections</h3>
                <CurrentCollections />
            </div>
            <div>
                <h3>Active Decks</h3>
                <ActiveDecks />
            </div>
            <div>
                <h3>Inactive Decks</h3>
                <InactiveDecks />
            </div>
            <div>
                <h3>Refinements</h3>
                <SuggestedRefinements />
            </div>
        </div>
        <ImportDeck />
    </div>
)

export default Overview
