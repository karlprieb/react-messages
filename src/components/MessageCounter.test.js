import React from 'react'
import MessageCounter from './MessageCounter'

describe('MessageCounter component', () => {
  it('should render app header with counter', () => {
    const wrapper = shallow(<MessageCounter counter={10} />)
    expect(wrapper).toMatchSnapshot()
  })
})
