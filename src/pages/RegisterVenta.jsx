import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import HeaderAdmin from '../components/shared/HeaderAdmin';
import { useNavigate } from 'react-router-dom';
const Api = import.meta.env.VITE_REACT_APP_URL;
import './style/RegisterVenta.css'

const RegisterVenta = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, reset} = useForm()

    const submit = (data) => {
        const url = `${Api}/ventas`
       axios.post(url, data)
       .then(res => console.log(res.data))
       .catch(err => console.log(err))
        reset()
    }

    const Volver = () => {
        navigate('/ventas')
    }

  return (
    <div>
        <HeaderAdmin/>
        <br /><br /><br /><br /><br /><br />
        <button className='RegisterVolver' onClick={Volver}>Volver</button>
        <form className='Register_From' onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="">Ingresa el nombre del producto</label>
                <input {...register("Producto")} type="text" />
            </div>
            <div>
                <label htmlFor="">Ingresa el precio de fabrica</label>
                <input {...register("Precio")} type="number" />
            </div>
            <div>
                <label htmlFor="">Ingresa el precio del producto en nuestra empresa</label>
                <input {...register("PrecioClick")} type="nunber" />
            </div>
            <div>
                <label htmlFor="">Ingresa la cantidad que se compro del producto</label>
                <input {...register("Cantidad")} type="number" />
            </div>
            <div>
                <label htmlFor="">Ingresa la fecha de la compra del producto</label>
                <input {...register("Fecha")} type="date" />
            </div>
            <div>
                <label htmlFor="">Ingresa la categoria del producto</label>
                <input {...register("Categoria")} type="text" />
            </div>
            <button>Registrar</button>
        </form>
    </div>
  )
}

export default RegisterVenta