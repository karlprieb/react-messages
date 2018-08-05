import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ src }) => (
  <img src={src} className='message-avatar' />
)

Avatar.propTypes = {
  src: PropTypes.string.isRequired
}

export default Avatar
