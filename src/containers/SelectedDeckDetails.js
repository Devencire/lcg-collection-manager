import { connect } from 'react-redux'
import DeckDetails from '../components/DeckDetails'

const mapStateToProps = state => ({
    deck: state.getIn(['cardsets', state.getIn(["selected", "id"])])
})

const SelectedDeckDetails = connect(mapStateToProps)(DeckDetails)

export default SelectedDeckDetails
