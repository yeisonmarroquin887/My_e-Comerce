import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProducts from '../components/CardProducts'
import './style/home.css'
import FilterCategory from '../components/Home/FilterCategory'
import FilterByPrice from '../components/Home/FilterByPrice'

const Home = () => {
   const {productsGlobal} = useSelector(state => state)

   const [InputValue, setInputValue] = useState('')

   const [FromTo, setFromTo] = useState({
    from:0,
    to:Infinity
   })



   const input = useRef()

   const handleChange = () => {
     setInputValue(input.current.value.toLowerCase().trim())
   }

   console.log(InputValue)

   const ProductFilter = productsGlobal
   ?.filter(prod => prod.title.toLowerCase().includes(InputValue))
    .filter(prod => {
      const from = +FromTo.from
      const to = +FromTo.to
      const price = +prod.price
      if(from && to){
         return from >= price && price >= to
      }
      if(from && !to) {
        return from <= price
      }
      if(!from && to){
        return price <= to
      }
      if(!from && !to){
        return true
      }
    })

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
          <FilterByPrice setFromTo={setFromTo}/>
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