import React from 'react'
import { connect } from 'react-redux'
import './SplitView.css'
import Overview from './Overview'
import DeckDetails from '../components/DeckDetails'

const detailElement = type => {
    switch (type) {
    case 'deck':
        return <DeckDetails />
    case 'refinement':
        return null
    default:
        return null
    }
}

const SplitView = ({selected}) => (
    <div className="Main">
        <Overview />
        {detailElement(selected.get('type'))}
    </div>
)

const mapStateToProps = state => ({selected: state.get('selected')})

export default connect(mapStateToProps)(SplitView)
