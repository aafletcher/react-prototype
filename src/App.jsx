import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'

function App() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    )
  }

export default App
