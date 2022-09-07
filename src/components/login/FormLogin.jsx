import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/login.css'

const FormLogin = () => {

  let {register, handleSubmit, reset} = useForm()

  let submit = data => {
    let URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
    .then(res => {
      localStorage.setItem('token', res.data.data.token)
    })
    .catch(err => console.log(err))
      reset({
        email: '',
        password: ''
     })

  }


  return (
    <form onSubmit={handleSubmit(submit)} className='login__form'>
      <h2 className='login__title'>Welcome! </h2>
        <div className='login__div-email'>
          <label className='login__label' htmlFor="email">Email: </label>
          <input {...register('email')} className='login__input' type="text" id="email" />
        </div>
        <div className='login__div-pass'>
          <label className='login__label' htmlFor="password">Password: </label>
          <input {...register('password')} className='login__input' type="password" id="password" />
        </div>
        <button className='login__btn'>Login</button>
    </form>
  )
}

export default FormLogin