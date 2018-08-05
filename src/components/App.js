import React from 'react'
import ChatBox from '../containers/ChatBox'
import AddMessage from '../containers/AddMessage'

import './app.css'

const App = () => (
  <main className='main-wrapper'>
    <ChatBox />
    <AddMessage />
  </main>
)

export default App
