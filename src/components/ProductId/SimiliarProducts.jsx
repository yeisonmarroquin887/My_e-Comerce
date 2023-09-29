import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProducts from '../CardProducts'
import './style/similiarproduct.css'
const Api = import.meta.env.VITE_REACT_APP_URL;

const SimiliarProducts = ({product}) => {

    const url = `${Api}/products?category=${product?.categoryId}`

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