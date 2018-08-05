import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ text, owner }) => (
  <li className={`message message--${owner}`}>
    {text}
  </li>
)

Message.propTypes = {
  text: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired
}

export default Message
