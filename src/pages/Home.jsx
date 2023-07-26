import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProducts from '../components/CardProducts'
import './style/home.css'
import FilterCategory from '../components/Home/FilterCategory'

const Home = () => {
   const {productsGlobal} = useSelector(state => state)

   const [InputValue, setInputValue] = useState('')

   const input = useRef()

   const handleChange = () => {
     setInputValue(input.current.value.toLowerCase().trim())
   }

   console.log(InputValue)

   const ProductFilter = productsGlobal?.filter(prod => prod.title.toLowerCase().includes(InputValue))

  return (
    <div className='Home'>
      <div>
        <input ref={input} onChange={handleChange} type="text" />
      <FilterCategory/>
      </div>
      
     {
        ProductFilter?.map(product => (
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