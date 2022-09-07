import React, { useEffect, useState } from 'react'
import FormLogin from '../login/FormLogin'


const Login = () => {

  const [logged, setLogged] = useState()

  useEffect(() => {
    setLogged(localStorage.getItem('token'))
  }, [])


  return (
  <main  className='login'>
    <FormLogin/>
  </main>

  )
}

export default Login