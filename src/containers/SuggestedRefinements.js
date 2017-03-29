import { connect } from 'react-redux'
import Refinements from '../components/Refinements'

const mapStateToProps = (state) => ({
    cardsets: state.get("cardsets"),
    refinements: state.get("refinements")
})

const mapDispatchToProps = ({})

const SuggestedRefinements = connect(
    mapStateToProps,
    mapDispatchToProps
)(Refinements)

export default SuggestedRefinements
