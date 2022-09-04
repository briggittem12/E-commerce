import React from 'react'

const Search = ({setFilterCategory, searchProduct}) => {


  let handleSearch = e => {
    e.preventDefault()
    searchProduct(e.target.searchPro.value.trim().toLowerCase())
    setFilterCategory('name')
    e.target.searchPro.value = ''
  }

  return (
    <form onSubmit={handleSearch}>
      <input id='searchPro' type="text" />
      <button>Search</button>
    </form>
  )
}

export default Search