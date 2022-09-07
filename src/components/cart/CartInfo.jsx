import axios from 'axios'
import React from 'react'
import getConfi from '../../utils/getConfi'

const CartInfo = ({product, getAllProducts}) => {

  let deleteProduct = () => {
    let URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfi())
    .then(() => getAllProducts())
    .catch(err => console.log(err))
  }

  return (
    <article className="cart__info">
        <header className='cart__info-header'>
        <h4 className='cart__category'>{product.brand}</h4>
        <h3 className='cart__name'>{product.title}</h3>
        </header>
        <i onClick={deleteProduct} className="cart__trash fa-regular fa-trash-can"></i>
      <span className='cart__quantity'>{product.productsInCart.quantity}</span>
      <footer className='cart__info-header'>
        <span className='cart__total-label'>Total:</span>
        <p className='cart__total-number'>{product.price}</p>
    </footer>
    </article>
  )
}

export default CartInfo