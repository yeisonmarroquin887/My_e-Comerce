import React from 'react'
import './clientes.css'
import Compras from './Compras'
import { useNavigate } from 'react-router-dom'

const Cliente = ({datos}) => {
    const navigate = useNavigate()
    const handel = () =>{
        navigate(<Compras/>)
    }
  return (
    <div>
       
    <div className='Clientes'>
      <h1>Nombre</h1>
      <h4>{datos.firstName} {datos.lastName}</h4>
      <h1>Correo</h1>
      <h4>{datos.email}</h4>
      <h1>Telefono</h1>
      <h3>{datos.phone}</h3>
      <button onClick={handel}>Compras</button>
    </div> 
  
    </div>

  )
}

export default Cliente
