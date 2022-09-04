import { useState } from 'react'
import './App.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import ProductDt from './components/routes/ProductDt'
import Header from './components/shared/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/purchases' element={<Purchases />} />
      <Route path='/product/:id' element={<ProductDt/>} />
    </Routes>
    </div>
    
  )
}

export default App
