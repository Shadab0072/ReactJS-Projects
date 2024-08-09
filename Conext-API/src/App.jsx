import { useState } from 'react'
import './App.css'
import { MyProvider } from './context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'

function App() { 
 
  return (
  <MyProvider> 
    <Login/>
    <Profile/>
  </MyProvider> 

  )
}


export default App 

