import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../store/slices/products.slice'
import { useDispatch, useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import axios from 'axios'
import Categorys from '../searchs/Categorys'
import Search from '../searchs/Search'
import { useParams } from 'react-router-dom'


const Home = () => {
  
  let dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  
  let products = useSelector(state => state.products)

  
  // Search and filter of the products
  // const [filterCategory, setFilterCategory] = useState()

  // let { id } = useParams()

  // useEffect(() => {
  //   let URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
  //     axios.get(URL)
  //     .then(res => setFilterCategory(res.data.data.product))
  //     .catch(err => console.log(err))
  // }, [])

/*
  const [productsComple, setProductsComple] = useState()
  const [searchProduct, setSearchProduct] = useState()
  

  useEffect(() => {
    if (filterCategory !== 'All'){
      let URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories/${filterCategory}`
        axios.get(URL)
        .then(res => {
          let arr = res.data.productsComple.map(e => e.productsComple)
          setFilterCategory({results: arr})
        })
        .catch(err => console.log(err))
      } else if (searchProduct) {
        let url = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${searchProduct}`
          let obj = {
            results: [{url}]
          }
          setProductsComple(obj)
      } else {
        let URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/'
          axios.get(URL)
          .then(res => setProductsComple(res.data))
          .catch(err => console.log(err))
      }
  }, [searchProduct, filterCategory])
*/


  //console.log(filterCategory)

  
  return (
    <div className='home'>
     {/* <aside>
        <Categorys
          product={products}
          filterCategory={filterCategory}
        />
      </aside>
         <div className='home__search'>
            <Search
            setFilterCategory={setFilterCategory}
            searchProduct={searchProduct}
            />
        </div> */}
      <div className="home__container-card">
        {
          products?.map(product => (
            <CardHome
            key={product.id}
            product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home