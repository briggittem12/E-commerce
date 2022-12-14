import React from 'react'

const ProductPur = ({product}) => {
  return (
    <li className='card-purchase__item'>
      <h4 className='card-purchase__name'>{product.title}</h4>
      <span className='card-purchase__quantity'>{product.productsInCart.quantity}</span>
      <span className='card-purchase__price'>{product.price}</span>
    </li>

  )
}

export default ProductPur