import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'

const Similar = ({productInfo}) => {

  const [similarProducts, setSimilarProducts] = useState()

  let products = useSelector(state => state.products)

  useEffect(() => {
    if(productInfo){
      let filter = products.filter(e => e.category.name === productInfo.category)
        setSimilarProducts(filter)
    }
  }, [productInfo])

  console.log(similarProducts)

  return (
    <div className='similar__products'>
      <span className='similar__title'>Similar Products</span>
      
      {
        similarProducts?.map(product => {
          if (product.title !== productInfo.title){
            return <CardHome
            key={product.id}
            product={product}
            />
          }
        })
      }
    </div>
  )
}

export default Similar