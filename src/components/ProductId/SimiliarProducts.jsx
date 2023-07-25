import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProducts from '../CardProducts'
import './style/similiarproduct.css'

const SimiliarProducts = ({product}) => {

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?category=${product?.categoryId}`

   const [filterProducts, getProductByCategory] = useFetch(url)

   useEffect(() => {
    if(product){
        getProductByCategory()
    }
   }, [product])

   console.log(filterProducts)

  return (
    <section className='SimiliarProduct'>
        <h2>Discover similar products</h2>
        <div className='SimiliarProduct__products'>
          {
            filterProducts?.map(prod => {
                if(prod.id !== product.id){
                    return (
                    <CardProducts
                     key={prod.id}
                     product={prod}
                    />
                    )
                }
            })
          }
        </div>
    </section>
  )
}

export default SimiliarProducts