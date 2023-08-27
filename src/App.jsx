import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import EnterDetails from './components/EnterDetails'
import Welcome from './components/Welcome'

function App() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/enterDetails" element={<EnterDetails />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </>
    )
  }

export default App
