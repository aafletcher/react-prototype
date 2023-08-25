import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'

function App() {

  return (
    <div className="flex-auto w-full">
      <Navbar />
      <MainPage />
    </div>
  )
}

export default App
