import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfi from '../../utils/getConfi'
import InfoPurchase from '../Purchase/InfoPurchase'

const Purchases = () => {

  const [purchasesInfo, setPurchasesInfo] = useState()

  // let getPurchasesInfo = () => {
    //   let URL = `https://ecommerce-api-react.herokuapp.com/api/v1/purchases/${getPurchases.id}`
    //   axios.get(URL, getConfi())
    //   .then(res => setPurchasesInfo())
    //   .catch(err => console.log(err))
    // }
    
    
    useEffect(() => {
      let URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
      axios.get(URL, getConfi())
      .then(res => setPurchasesInfo(res.data.data.purchases))
      .catch(err => console.log(err))
    }, [])

  console.log(purchasesInfo)

  return (
    <div className='purchase'>
       {
        purchasesInfo?.map(purchase => (
          <InfoPurchase
          key={purchase.id}
          purchase={purchase}
          />
        ))
        }
    </div>
  )
}

export default Purchases