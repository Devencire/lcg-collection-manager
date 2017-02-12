import { connect } from 'react-redux'
import Decks from '../components/Decks'

const mapStateToProps = sectionPrefix => state => ({
    decks: state.getIn(["sections", sectionPrefix + "Decks"]),
    cardsets: state.get("cardsets")
})

const mapDispatchToProps = ({})

const ActiveDecks = connect(
    mapStateToProps("active"),
    mapDispatchToProps
)(Decks)

const InactiveDecks = connect(
    mapStateToProps("inactive"),
    mapDispatchToProps
)(Decks)

export { ActiveDecks, InactiveDecks }
