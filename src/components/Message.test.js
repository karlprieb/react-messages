import React from 'react'
import Message from './Message'

describe('Message component', () => {
  it('should render a message of yours', () => {
    const wrapper = shallow(<Message text='Some message' owner='yours' />)
    expect(wrapper.find('.message').hasClass('message--yours')).toEqual(true)
    expect(wrapper.text()).toEqual('Some message')
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a message of theirs', () => {
    const wrapper = shallow(<Message text='Another message just for test' owner='theirs' />)
    expect(wrapper.find('.message').hasClass('message--theirs')).toEqual(true)
    expect(wrapper.text()).toEqual('<Avatar />Another message just for test')
    expect(wrapper).toMatchSnapshot()
  })
})
