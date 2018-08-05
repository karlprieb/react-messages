import React from 'react'
import MessageList from './MessageList'

const messagesMock = [
  {
    id: 0,
    text: 'Test message 0',
    owner: 'yours'
  },
  {
    id: 1,
    text: 'Another test message with id 1',
    owner: 'theirs'
  },
  {
    id: 2,
    text: 'Message with id 2',
    owner: 'yours'
  }
]

describe('MessageList component', () => {
  it('should render a list of messages', () => {
    const wrapper = shallow(<MessageList messages={messagesMock} />)
    expect(wrapper).toMatchSnapshot()
  })
})
