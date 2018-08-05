import React from 'react'
import PropTypes from 'prop-types'

import './avatar.css'

const Avatar = ({ src }) => (
  <img src={src} alt='avatar' className='message-avatar' />
)

Avatar.propTypes = {
  src: PropTypes.string.isRequired
}

export default Avatar
