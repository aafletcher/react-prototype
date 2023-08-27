import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import Signup from './components/Signup'

function App() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </>
    )
  }

export default App
