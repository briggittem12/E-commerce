import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import getConfi from '../../utils/getConfi'


const CardHome = ({product}) => {

  let navigate = useNavigate()

  let handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  // this function is for agg products in the cart
  let getAddCart = e => {
    e.stopPropagation()
    let URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
      let obj = {
        id: product.id,
        quantity: 1
      }
      axios.post(URL, obj, getConfi())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
  }

  return (

    <article onClick={handleClick} className='card-home'>
      <header className='card-home__header'>
        <img className='card-home__img' src={product.productImgs[0]} alt="" />
        <img className='second__img' src={product.productImgs[1]} alt="" />
      </header>
      <div className="card-home__body">
        <h3 className="card-home__name">{product.title}</h3>
        <section className='card-home__price'>
          <h4 className='card-home__price-label'>Price:</h4>
          <span className='card-home__price-value'>${product.price}</span>
        </section>
        <div className='card-home__btn'>
          <button onClick={getAddCart} className='home__btn'><i className="fa-solid fa-cart-plus"></i></button>
        </div>
      </div>
    </article>
  )
}

export default CardHome