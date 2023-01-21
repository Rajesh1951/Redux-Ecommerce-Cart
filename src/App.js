import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homee from './components/Homee.jsx'
import Cart from './components/Cart.jsx'
import Header from './components/Header.jsx'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homee />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App