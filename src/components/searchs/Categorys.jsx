import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Categorys = ({products, filterCategory}) => {

  const [categories, setCategories] = useState()

  useEffect(() => {
    let URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
      axios.get(URL)
      .then(res => setCategories(res.data.categories))
      .catch(err => console.log(err))

  }, [])


  let handleChange = e => {
    e.preventDefault()
    setCategories(e.target.value)
  }

console.log(categories)


  return (
    <div>
      <select value={filterCategory} onChange={handleChange}>
          <option value="name">Categories</option>
            {
              categories?.map(category => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))
            }
      </select>
    </div>
  )
}

export default Categorys