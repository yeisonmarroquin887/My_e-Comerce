import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style/header.css'
import Menu from '../Menu'

const Header = () => {


  const [Close, setClose] = useState(true)

  const handelClose = () => {
    setClose(false)
  }
  const handelClosevol = () => {
    setClose(true)
  }


 

  return (
    <header className='Header'>
        <h1 className='Header_h1'><Link to='/'> <img className='header_img' src="../images/logo_header.jpg" alt="" /> </Link></h1>
         <div onClick={handelClose} className='Header_menu'>
          <i className='bx bx-menu'></i>
         </div>
        
        
        
        <nav className={`Header_nav ${Close && 'Header_close'}`}>
          
            <ul className='Header_ul'>
            <li onClick={handelClosevol} className='Header_li'> <Link className='Header_li' to='/'>Inicio</Link> </li>
                <li onClick={handelClosevol} className='Header_li'> <Link className='Header_li' to='/login'>Login</Link> </li>
                <li onClick={handelClosevol} className='Header_li'> <Link className='Header_li' to='/purchases'>Purchases</Link> </li>
                <li onClick={handelClosevol} className='Header_li'> <Link className='Header_li' to='/cart'>Cart</Link> </li>
                <li onClick={handelClosevol} className='Header_volver'>Volver</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
