import React from 'react'
import './Overview.css'
import Collections from '../components/Collections'
import { ActiveDecks, InactiveDecks } from '../components/Decks'
import ImportDeck from '../components/ImportDeck'
import Refinements from '../components/Refinements'

const Overview = () => (
    <div className="Overview">
        <div>
            <div>
                <h3>Collections</h3>
                <Collections />
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
                <Refinements />
            </div>
        </div>
        <ImportDeck />
    </div>
)

export default Overview
