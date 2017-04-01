import { connect } from 'react-redux'
import Decks from '../components/Decks'

const mapStateToProps = sectionPrefix => state => ({
    decks: state.getIn(["sections", sectionPrefix + "Decks"]),
    cardsets: state.get("cardsets")
})

const ActiveDecks = connect(mapStateToProps("active"))(Decks)

const InactiveDecks = connect(mapStateToProps("inactive"))(Decks)

export { ActiveDecks, InactiveDecks }
