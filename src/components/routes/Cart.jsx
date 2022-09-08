import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfi from '../../utils/getConfi'
import CartInfo from '../cart/CartInfo'

const Cart = () => {

  const [cartProducts, setCartProducts] = useState()
  const [totalPrice, setTotalPrice] = useState()


  let getAllProducts = () => {
    let URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfi())
    .then(res => {
      let products = res.data.data.cart.products
      setCartProducts(products)
      let total = products.reduce((acc, cv) => {
        return Number(cv.price) * cv.productsInCart.quantity + acc
      }, 0)
      setTotalPrice(total)
    })
    .catch(err => setCartProducts())
  }

  useEffect(() => {
   getAllProducts()
  }, [])

  let handleCheckOut = () => {
    let URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post(URL, obj, getConfi())
    .then(res => {
      console.log(res.data)
      getAllProducts()
      setTotalPrice(0)
    })
    .catch(err => console.log(err))
  }

  //console.log(cartProducts)

  return (
    <div className='cart'> 
    <span className='cart__title'>Cart</span>
    <div className='cart__container'> 

      {
        cartProducts?.map(product => (
          <CartInfo
            key={product.id}
            product={product}
            getAllProducts={getAllProducts}
          />
        ))
      }
      <hr />
      <footer className="cart__footer">
        <div className="cart__values">
          <span className="cart__total-global-label">Total: </span>
          <p className="cart__total-global-value">{totalPrice}</p>
        </div>
        <button onClick={handleCheckOut} className="cart__btn">Checkout</button>
      </footer>
    </div>
    </div>
  )
}

export default Cart