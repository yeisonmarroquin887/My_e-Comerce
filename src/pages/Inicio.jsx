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
  <div className='tex_w'>
      <div className="welcome-text">
    <h1>Bienvenido a nuestra empresa Claro</h1>
    <p>¡Bienvenido a nuestra tienda en línea! Explora una amplia gama de productos <br /> de alta calidad para comprar y recibir en tu puerta. <br /> <br /> Elige tu rol para acceder: <br /> <br />
    <b>Cliente:</b> Descubre ofertas exclusivas y una experiencia de compra única.</p>
    
  </div>
  <div>
     <button className="role-button" onClick={handelrol2}>Administrador</button>
  <button className="role-button" onClick={handelrol1}>Cliente</button>
  </div>
  <p>¡Disfruta de tus compras en línea con nosotros!</p>
  </div>

</div>

  )
}

export default Inicio
