import React, { useState } from 'react' 

const ProductDes = ({productInfo}) => {

    const [counter, setCounter] = useState(1)

   let handlePlus = () => setCounter(counter + 1)
   let handleMin = () => {
    if(counter - 1>= 1)
    setCounter(counter - 1)
}

  return (
    <section className='product-info'>
    <div className='product-info__img'>
    <img className='product__img' src={productInfo?.productImgs[1]} alt="" />
    </div>
        <h2 className='product-info__name'>{productInfo?.title}</h2>
        <p className='product-info__description'>{productInfo?.description}</p>
    <div className='product-info__body'>
    <article className='product-info__price'>
        <h3 className='product-info__price-label'>Price</h3>
        <span className='product-info__price-value'>{productInfo?.price}</span>
    </article>
    <article className='product-info__quantity'>
        <h3 className='product-info__quantity-label'>Quantity</h3>
        <div className='product-info__quantity-product'>
            <button onClick={handleMin}>-</button>
            <div>{counter}</div>
            <button onClick={handlePlus}>+</button>
        </div>
    </article>
    </div>
    </section>
  )
}

export default ProductDes