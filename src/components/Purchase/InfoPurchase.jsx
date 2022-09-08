import React from 'react'
import ProductPur from './ProductPur'
import './styles/styles.css'

const InfoPurchase = ({purchase}) => {
  return (
    <article className='card-purchase'>
      <h3 className='card-purchase__date'>{purchase.createdAt}</h3>
        <ul className="card-purchase__body">
          {
            purchase.cart.products.map(product => (
              <ProductPur
              key={product.id}
              product={product}
              />
            ))
          }
        </ul>
    </article>
  )
}

export default InfoPurchase