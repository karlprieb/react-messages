import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

import './messageList.css'

class MessageList extends PureComponent {
  componentDidMount () {
    this.scrollToBottom()
  }

  componentDidUpdate () {
    this.scrollToBottom()
  }

  scrollToBottom () {
    const element = this.el
    element.scrollTo(0, element.scrollHeight)
  }

  get allMessages () {
    return this.props.messages.map(message =>
      <Message
        key={message.id}
        {...message}
      />
    )
  }

  render () {
    return (
      <ul className='message-list' ref={el => { this.el = el }}>
        {this.allMessages}
      </ul>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MessageList
