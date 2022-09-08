import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDes from '../productDet/ProductDes'
import Similar from '../productDet/Similar'

const ProductDt = () => {

  const [productInfo, setProductInfo] = useState()

  let { id } = useParams()

  useEffect(() => {
    let URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
      axios.get(URL)
      .then(res => setProductInfo(res.data.data.product))
      .catch(err => console.log(err))
  }, [])

  //console.log(productInfo)


  return (
    <div>
      
        <ProductDes productInfo={productInfo}/>
        <Similar productInfo={productInfo}/>
      
    </div>
  )
}

export default ProductDt