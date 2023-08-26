import React from 'react'
import { useNavigate } from 'react-router-dom'

const Inicio = () => {

    const navigate = useNavigate()

    const handelrol1 = () =>{
        navigate('home')
    }
    const handelrol2 = () =>{
        navigate('loginadmin')
    }

  return (
    <div>
        <br />
        <br />
        <br /><br />
      coloca tu rol
      <button onClick={handelrol2}>Administrador</button>
      <button onClick={handelrol1}>Cliente</button>
    </div>
  )
}

export default Inicio
