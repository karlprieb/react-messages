import { connect } from 'react-redux'
import MessageCounter from '../components/MessageCounter'

const mapStateToProps = state => ({
  counter: state.length
})

export default connect(mapStateToProps)(MessageCounter)
