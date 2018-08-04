import { connect } from 'react-redux'
import { addMessage } from '../actions'
import MessageField from '../components/MessageField'

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(addMessage(text))
})

export default connect(
  null,
  mapDispatchToProps
)(MessageField)
