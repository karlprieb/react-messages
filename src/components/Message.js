import React from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'

import './message.css'
import avatarImage from '../assets/avatar.jpg'

const Message = ({ text, owner }) => {
  const avatarRender = () => {
    if (owner === 'theirs') {
      return <Avatar src={avatarImage} />
    }

    return false
  }

  return (
    <li className={`message message--${owner}`}>
      {avatarRender()}
      <span className='message-text'>{text}</span>
    </li>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired
}

export default Message
