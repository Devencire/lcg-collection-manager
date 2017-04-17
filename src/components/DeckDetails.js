import React from 'react'
import { connect } from 'react-redux'
import './DeckDetails.css'
import { cardName } from '../cards'

const CardList = ({template, contents}) => (
    <ul>
        {template.map((required, cardCode) => (
            <li key={cardCode}>
                {contents.get(cardCode, 0)} / {required} {cardName(cardCode)}
            </li>
        )).valueSeq()}
    </ul>
)

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
