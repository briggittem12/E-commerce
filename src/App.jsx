import { useEffect, useState } from 'react'
import './App.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import ProductDt from './components/routes/ProductDt'
import Header from './components/shared/Header'
import axios from 'axios'
import PortectedRouts from './components/routes/PortectedRouts'
import Cart from './components/routes/Cart'

function App() {
  
  // useEffect(() => {
  //   let URL ='https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //     let obj = {
  //       firstName: 'Briggitte',
  //       lastName: 'Merchan',
  //       email: 'briggittemerchan6@gmail.com',
  //       password: 'bri12345',
  //       phone: '2564315471',
  //       role: 'admin'
  //     }
  //   axios.post(URL, obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <div className='app'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/product/:id' element={<ProductDt/>} />
      <Route element={<PortectedRouts/>}>
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/cart' element={<Cart/>} />
      </Route>
    </Routes>
    </div>
    
  )
}

export default App
