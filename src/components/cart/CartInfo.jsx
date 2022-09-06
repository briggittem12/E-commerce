import React from 'react'

const CartInfo = () => {
  return (
    <article className="cart__info">
        <header className='cart__info-header'>
        <h4 className='cart__category'>Samsung</h4>
        <h3 className='cart__name'>Samdung Galaxy S22</h3>
        </header>
        <i className="cart__trash fa-regular fa-trash-can"></i>
      <span className='cart__quantity'>1</span>
      <footer className='cart__info-header'>
        <span className='cart__total-label'>Total:</span>
        <p className='cart__total-number'>850</p>
    </footer>
    </article>
  )
}

export default CartInfo