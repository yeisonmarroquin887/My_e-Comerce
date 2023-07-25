import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/ProductId/ProductIdInfo'
import SliderImgs from '../components/ProductId/SliderImgs'
import SimiliarProducts from '../components/ProductId/SimiliarProducts'

const ProductId = () => {
    const {id} = useParams()

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`

    const [Product, getProductById] = useFetch(url)

    useEffect(() => {
      getProductById()
    }, [])


  return (
    <div>
      <SliderImgs product={Product}/>
    <ProductIdInfo product={Product}/>
    <SimiliarProducts product={Product}/>
    </div>
  )
}

export default ProductId
