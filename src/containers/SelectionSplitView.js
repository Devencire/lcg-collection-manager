import { connect } from 'react-redux'
import SplitView from '../components/SplitView'

const mapStateToProps = state => ({
    selected: state.get("selected")
})

const SelectionSplitView = connect(mapStateToProps)(SplitView)

export default SelectionSplitView
