import React from 'react'
import Counter from '../containers/Counter'
import ChatBox from '../containers/ChatBox'
import AddMessage from '../containers/AddMessage'

import './app.css'

const App = () => (
  <main className='main-wrapper'>
    <Counter />
    <ChatBox />
    <AddMessage />
  </main>
)

export default App
