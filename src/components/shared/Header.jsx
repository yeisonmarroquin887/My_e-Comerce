import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style/header.css'
import Menu from '../Menu'

const Header = () => {

 const navigate = useNavigate()

 

  return (
    <header className='Header'>
        <h1 className='Header_h1'><Link to='/'>E-Commerce </Link></h1>
      
          
        
        
        <nav className='Header_nav'>
            <ul className='Header_ul'>
                <li className='Header_li'> <Link className='Header_li' to='/login'>Login</Link> </li>
                <li className='Header_li'> <Link className='Header_li' to='/register'>Register</Link> </li>
                <li className='Header_li'> <Link className='Header_li' to='/purchases'>Purchases</Link> </li>
                <li className='Header_li'> <Link className='Header_li' to='/cart'>Cart</Link> </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
