import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

const MessageList = ({ messages }) => {
  const messageCount = messages.length
  const allMessages = messages.map(message =>
    <Message
      key={message.id}
      {...message}
    />
  )

  return (
    <ul>
      {allMessages}
    </ul>
  )
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MessageList
