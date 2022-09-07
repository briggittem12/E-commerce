import axios from 'axios'
import React, { useEffect } from 'react'
import getConfi from '../../utils/getConfi'
import CartInfo from '../cart/CartInfo'

const Cart = () => {

  const [cartProducts, setCartProducts] = useState()


  let getAllProducts = () => {
    let URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfi())
    .then(res => setCartProducts(res.data.data.cart.products))
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
    axios.post(URL, obj, getConfi)
    .then(res => {
      console.log(res.data)
    getAllProducts()})
    .catch(err => console.log(err))
  }

  console.log(cartProducts)
  return (
    <div className='cart'>
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
        <span className="cart__total-global-label"></span>
        <p className="cart__total-global-value"></p>
        <button onClick={handleCheckOut} className="cart__btn">Checkout</button>
      </footer>
    </div>
  )
}

export default Cart