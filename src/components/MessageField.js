import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

class MessageField extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    const text = this.state.value
    if (text) {
      this.props.onSubmit(text)
      this.setState({value: ''})
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <button type='submit'>Send</button>
        </form>
      </div>
    )
  }
}

MessageField.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default MessageField
