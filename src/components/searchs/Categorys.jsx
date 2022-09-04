import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Categorys = ({filterCategory, setFilterCategory, searchProduct}) => {

  const [types, setTypes] = useState()

  useEffect(() => {
    let URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(URL)
    .then(res => setTypes(res.data.categories))
    .catch(err => console.log(err))
  }, [])

  let handleChange = e => {
    e.preventDefault()
    setFilterCategory(e.target.value)
    searchProduct('')
  }

//console.log(types)
  return (
    <div>
      <select value={filterCategory} onChange={handleChange}>
          <option value="name">Categories</option>
             {
              types?.map(type => (
                <option key={type.name} value={type.name}>{type.name}</option>
              ))
            } 
      </select>
    </div>
  )
}

export default Categorys