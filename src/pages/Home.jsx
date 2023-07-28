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
   const [Cambio, setCambio] = useState(false)

   const handlefilters = () => {
    setCambio(true)
   }
   const handelVolver = () => {
    setCambio(false)
   }

  return  (
    <div className=''>
      <div onClick={handlefilters} className='fil'> 
        <i className='bx bxs-filter-alt'> <samp className='name'>filters</samp></i>
      </div>
   
      <div className='Home_input'>
        <label className='Home_label' htmlFor="bus">Aqui puedes buscar en tiempo real <br /> el producto que desees por nombre😀</label>
        <input className='Home_in' id='bus' ref={input} onChange={handleChange} type="text" />
      
      </div>
      <div className='Home'>
        <div className={`Home_filter ${Cambio && 'Home_filter-close'}`}>
          <div onClick={handelVolver} className='Volver'>
          <i class='bx bx-chevrons-left'></i>
          </div>
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
    
    </div>
  )
}

export default Home