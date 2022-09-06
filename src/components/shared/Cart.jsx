import axios from 'axios'
import React, { useEffect } from 'react'
import CartInfo from '../cart/CartInfo'

const Cart = () => {

  const [cartProducts, setCartProducts] = useState()

  useEffect(() => {
    
    let config = {
      headers: {
        Authprization: `Bearer ${localStorage.getItem('token')}`
      }
    }

    let URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
      axios.get(URL, config)
      .then(res => setCartProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='cart'>
      <CartInfo/>
      <hr />
      <footer className="cart__footer">
        <span className="cart__total-global-label"></span>
        <p className="cart__total-global-value"></p>
        <button className="cart__btn">Checkout</button>
      </footer>
    </div>
  )
}

export default Cart