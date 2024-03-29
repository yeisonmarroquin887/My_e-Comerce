import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProducts from '../components/CardProducts'
import './style/home.css'
import FilterCategory from '../components/Home/FilterCategory'
import FilterByPrice from '../components/Home/FilterByPrice'
import Header from '../components/shared/Header'
import Loading from '../components/Loading/Loading'
import Perfil from '../components/Perfil'
import NoLogeado from '../components/NoLogeado'
import Footer from '../components/Footer/Footer'

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

   const [Isloanding, setIsloanding] = useState(false);

   setTimeout(() => {
     setIsloanding(productsGlobal.length >= 1);
   }, 1000);
   const [name, setName] = useState(localStorage.getItem('token'));

  return  (
    <div className='hom'>
    <Header/>
    {
      Isloanding
      ?    <div>
            <div onClick={handlefilters} className='fil'> 
        <i className='bx bxs-filter-alt'> <samp className='name'>filters</samp></i>
      </div>
   
      <div className='Home_input'>
        <label className='Home_label' htmlFor="bus">Aqui puedes buscar en tiempo real <br /> el producto que desees por nombre😀</label>
        <input className='Home_in' id='bus' ref={input} onChange={handleChange} type="text" />
      <h2 className='intro'>Puedes realizar la compra por WhatsApp dando clic en el segundo botón del producto. Y para efectuar la compra con registro en nuestra plataforma, haz clic en el segundo botón.</h2>
      </div>
      <div className='Home'>
        <div className={`Home_filter ${Cambio && 'Home_filter-close'}`}>
          <div className='Home_perfil'>
                     <div className='Volver'>
            <div  onClick={handelVolver} >
            <i class='bx bx-x'></i>
            </div>
          </div>
          <nav>
            {
              (name)
              ? (<Perfil name={setName}/>)
              : (<NoLogeado/>)
            }
          </nav>
          </div>
               <FilterCategory/>
               <br />
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
      : <Loading/>
    }


    <Footer/>
    </div>
  )
}

export default Home