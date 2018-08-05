import React from 'react'
import Avatar from './Avatar'

import avatarImage from '../assets/avatar.jpg'

describe('Avatar component', () => {
  it('should render avatar image', () => {
    const wrapper = shallow(<Avatar src={avatarImage} />)
    expect(wrapper).toMatchSnapshot()
  })
})
