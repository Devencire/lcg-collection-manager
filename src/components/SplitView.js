import React from 'react'
import './SplitView.css'
import Overview from './Overview'
import SelectedDeckDetails from '../containers/SelectedDeckDetails'

const detailElement = type => {
    switch (type) {
        case "deck":
            return <SelectedDeckDetails />
        case "refinement":
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

export default SplitView
