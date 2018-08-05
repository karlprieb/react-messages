import React from 'react'
import App from './App'

describe('App component', () => {
  it('should render all chat application', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
