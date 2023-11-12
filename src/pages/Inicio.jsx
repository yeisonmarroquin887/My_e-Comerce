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
    <h1>Bienvenid@ a nuestra empresa Click</h1>
    <p>Explora una amplia gama de productos <br /> de alta calidad para comprar y recibir en la puerta de tu casa. <br /> <br /> Elige tu rol para acceder: <br /> <br />
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
