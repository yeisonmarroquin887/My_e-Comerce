import React from 'react'
import './style/logeado.css'

const Logeado = ({deleteToken}) => {
  return (
    <div className='logeado'>
          <div className='logeado_user'>
            <div className='logeado_icon-father'>
                <i className='logeado_icon bx bxs-user-circle'></i>
            </div>
        
            <h1 className='logeado_title'>Bienvenido(a) <br /> <span className='logeado_name'>😀{localStorage.getItem('name')}😀</span> </h1>
            <button className='logeado_close' onClick={deleteToken}>Cerrar Sesión</button>
          </div>
        
      </div>
  )
}

export default Logeado