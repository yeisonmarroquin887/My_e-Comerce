import React from 'react'
import useAddproduct from '../../../hooks/useAddproduct'
import { useForm } from 'react-hook-form'
import deafaultRegisterValues from '../../../utils/deafaultRegisterValues'
const Api = import.meta.env.VITE_REACT_APP_URL;

const CategoryAdd = ( {categoryClose} ) => {
  const url = `${Api}/categoris`
  
  const {creatProduct} = useAddproduct(url)
  const {register, handleSubmit, reset} = useForm()
  const submit = (data) => {
    creatProduct(data)
    reset(deafaultRegisterValues)
  }
   
  return (
    <div>
      <button onClick={categoryClose}>Cerrar</button>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="category">Nombre</label>
                <input type="text" id='category' {...register('name')} />
            </div>
            <button>Crear</button>
        </form>
    </div>
  )
}

export default CategoryAdd
