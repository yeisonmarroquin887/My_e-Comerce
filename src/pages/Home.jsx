import React from 'react'
import { useSelector } from 'react-redux'
import CardProducts from '../components/CardProducts'
import './style/home.css'

const Home = () => {
   const {productsGlobal} = useSelector(state => state)
  return (
    <div className='Home'>
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