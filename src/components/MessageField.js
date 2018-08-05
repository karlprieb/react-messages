import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { IconSend } from '../icons'

import './messageField.css'

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
      <React.Fragment>
        <form className='message-form' onSubmit={this.handleSubmit}>
          <textarea className='message-textarea' value={this.state.value} onChange={this.handleChange} />
          <button className='message-send-button' type='submit'>
            <IconSend title='Send' />
          </button>
        </form>
      </React.Fragment>
    )
  }
}

MessageField.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default MessageField
