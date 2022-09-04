import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardHome = ({product}) => {

  let navigate = useNavigate()

  let handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <article onClick={handleClick} className='card-home'>
      <header className='card-home__header'>
        <img className='card-home__img' src={product.productImgs[0]} alt="" />
      </header>
      <div className="card-home__body">
        <h3 className="card-home__name">{product.title}</h3>
        <section className='card-home__price'>
          <h4 className='card-home__price-label'>Price</h4>
          <span className='card-home__price-value'>{product.price}</span>
        </section>
        <button className='card-home__btn'><i className="fa-solid fa-cart-shopping"></i></button>
      </div>
    </article>
  )
}

export default CardHome