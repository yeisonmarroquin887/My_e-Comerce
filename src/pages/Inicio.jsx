import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style/inicio.css'

const Inicio = () => {

    const navigate = useNavigate()

    const handelrol1 = () =>{
        navigate('home')
    }
    const handelrol2 = () =>{
        navigate('loginadmin')
    }

  return (
<div className="welcome-container">
  <section className='text'>
      <div className='rol'>
     <h1>Bienvenid@ a  Click</h1>
     <p>Explora una amplia gama de productos
de alta calidad para comprar y recibir en la puerta de tu casa.</p>

<h3>Elige tu rol:</h3>
  </div>
 
  <div className='tex_w'>
  <div className='Roles'>
     <nav className="role-button" onClick={handelrol2}><i class='bx bxs-user-circle'></i><h1>Administrador</h1></nav>
  <nav className="role-button" onClick={handelrol1}><i class='bx bxs-user-account'></i><h1>Clientes</h1></nav>
  </div>
  </div>
  <h2 className='fin'>¡Disfruta de tus compras en línea con nosotros!</h2>
  </section>



</div>

  )
}

export default Inicio
