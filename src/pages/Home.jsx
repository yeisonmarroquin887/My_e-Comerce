import React from 'react'
import { useSelector } from 'react-redux'
import CardProducts from '../components/CardProducts'

const Home = () => {
   const {productsGlobal} = useSelector(state => state)
  return (
    <div>
     {
        productsGlobal?.map(product => (
         <CardProducts
          key={product.id}
          product={product}
         />
        ))
     }
    </div>
  )
}

export default Home