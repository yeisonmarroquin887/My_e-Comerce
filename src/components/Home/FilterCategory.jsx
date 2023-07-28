import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getAllproductsThunk } from '../../store/slice/products.slice'
import { useDispatch } from 'react-redux'
import './style/filter.css'

const FilterCategory = () => {
  const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
    const [apiInfo, getProductById] = useFetch(url)

    useEffect(() => {
      getProductById()
    }, [])

    console.log(apiInfo)

    const dispatch = useDispatch()

    const handleCategories = (id) => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
        dispatch(getAllproductsThunk(url)) 
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