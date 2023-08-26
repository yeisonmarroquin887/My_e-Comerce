import React from 'react'
import useAddproduct from '../../../hooks/useAddproduct'
import { useForm } from 'react-hook-form'

const Productadd = () => {

    const url = 'https://ecomereceapi.onrender.com/api/v1/products'
    const [createProduct] = useAddproduct(url)
             const {register, handleSubmit, reset} =useForm()
       const submit = (data) => {
           createProduct(data)
       }

  return (
    <div>
         <form onSubmit={handleSubmit(submit)}>
  
  <div>
      <label htmlFor="title">Nobre</label>
      <input {...register('title')} type="text" />
  </div>
  <div>
      <label htmlFor="description">Descripcion</label>
      <input {...register('description')} type="text" />
  </div>
  <div>
      <label htmlFor="price">Precio</label>
      <input {...register('price')} type="number" />
  </div>
  <button>añadir</button>
</form>
    </div>
  )
}

export default Productadd
