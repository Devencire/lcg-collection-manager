import { connect } from 'react-redux'
import Collections from '../components/Collections'

const mapStateToProps = (state) => ({
    collections: state.getIn(["sections", "collections"]),
    cardsets: state.get("cardsets")
})

const mapDispatchToProps = ({})

const CurrentCollections = connect(
    mapStateToProps,
    mapDispatchToProps
)(Collections)

export default CurrentCollections
