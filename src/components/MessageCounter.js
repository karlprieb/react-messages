import React from 'react'
import PropTypes from 'prop-types'
import { IconChat, IconMail } from '../icons'

import './messageCounter.css'

const MessageCounter = ({ counter }) => (
  <header className='message-counter'>
    <div className='message-counter-group'>
      <IconChat title='Chat bubles' />
      <span className='message-counter-text'>{counter} Online Requests</span>
    </div>
    <div className='message-counter-group'>
      <IconMail title='Envelope' />
      <span className='message-counter-text'>{counter} Offline Requests</span>
    </div>
  </header>
)

MessageCounter.propTypes = {
  counter: PropTypes.number.isRequired
}

export default MessageCounter
