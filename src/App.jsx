import React from 'react'
import { UserContextProvider } from './context/userContext'

function App() {

  return (
    <UserContextProvider>
      <div>Hello, World!</div>
    </UserContextProvider>
  )
}

export default App
