import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getAllproductsThunk } from '../../store/slice/products.slice'
import { useDispatch } from 'react-redux'
import './style/filter.css'

const FilterCategory = () => {
  const url = 'https://ecomereceapi.onrender.com/api/v1/categoris'
    const [apiInfo, getProductById] = useFetch(url)

    useEffect(() => {
      getProductById()
    }, [])

    

    const dispatch = useDispatch()

    const handleCategories = (id) => {
        const url = `https://ecomereceapi.onrender.com/api/v1/products?category=${id}`
        dispatch(getAllproductsThunk(url))
        console.log("ejecute") 
    } 

    const handleClickAllProducts = () => {
        dispatch(getAllproductsThunk())
    }

    

  return (
    <div className='filter'>
        <h3 className='filter_name'>Category</h3>
        <ul>
            <li className='filter_li' onClick={handleClickAllProducts}>All Products</li>
           {
            apiInfo?.map(categories => (
                <li className='filter_li' onClick={() => handleCategories(categories.id)} key={categories.id}> {categories.name}</li>
            ))
           } 
        </ul>
    </div>
  )
}

export default FilterCategory