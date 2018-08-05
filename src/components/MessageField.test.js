import React from 'react'
import MessageField from './MessageField'

const onSubmit = jest.fn()
const component = <MessageField onSubmit={onSubmit} />
const wrapper = shallow(component)

describe('Message textarea', () => {
  it('shoud render without error', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should clear textarea value on submit', () => {
    // Add some value to textarea
    wrapper.find('textarea').simulate('change', {target: {value: 'textarea message'}})
    expect(wrapper.find('textarea').getElement().props.value).toEqual('textarea message')

    // Submit the form to clear textarea
    wrapper.find('form').simulate('submit', { preventDefault () {} })
    expect(wrapper.find('textarea').getElement().props.value).toEqual('')
  })
})
