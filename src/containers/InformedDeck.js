import { connect } from 'react-redux'
import Deck from '../components/Deck'

const mapStateToProps = (state) => ({
    cardInfo: state.getIn(["definitions", "cards"])
})

const mapDispatchToProps = ({})

const InformedDeck = connect(
    mapStateToProps,
    mapDispatchToProps
)(Deck)

export default InformedDeck
