import React from 'react'
import { connect } from 'react-redux'
import './DeckDetails.css'
import CardList from './CardList.js'

const DeckDetails = ({deck}) => (
    <div className="DeckDetails">
        <h3>{deck.get('name')}</h3>
        <CardList
            template={deck.get('template')}
            contents={deck.get('contents')} />
    </div>
)

const mapStateToProps = state => ({
    deck: state.getIn(['cardsets', state.getIn(['selected', 'id'])])
})

export default connect(mapStateToProps)(DeckDetails)
