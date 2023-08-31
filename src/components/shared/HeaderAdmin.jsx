import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style/headerAdmin.css'

const HeaderAdmin = () => {
    const [Close, setClose] = useState(true)

    const handelClose = () => {
      setClose(false)
    }
    const handelClosevol = () => {
      setClose(true)
    }
  
  
   
  
    return (
      <header className='Heade'>
          <h1 className='Heade_h1'><Link to='/home'> <img className='header_img' src="../images/Logo-header.jpg" alt="" /> </Link></h1>
           <div onClick={handelClose} className='Heade_menu'>
            <i className='bx bx-menu'></i>
           </div>
          
          
          
          <nav className={`Heade_nav ${Close && 'Heade_close'}`}>
            
              <ul className='Heade_ul'>
                  <li onClick={handelClosevol} className='Heade_li'> <Link className='Heade_li' to='/'>Inicio</Link> </li>
                  <li onClick={handelClosevol} className='Heade_li'> <Link className='Heade_li' to='/home'>Products</Link> </li>
                  <li onClick={handelClosevol} className='Heade_volver'>Volver</li>
              </ul>
          </nav>
      </header>
    )
}

export default HeaderAdmin
