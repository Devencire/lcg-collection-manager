import { connect } from 'react-redux'
import Deck from '../components/Deck'
import { selectDeck } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectDeck: () => {
        console.log("ownProps", ownProps)
        dispatch(selectDeck(ownProps.deck))
    }
})

const SelectableDeck = connect(null, mapDispatchToProps)(Deck)

export default SelectableDeck
