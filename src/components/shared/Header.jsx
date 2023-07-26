import React from 'react'
import { Link } from 'react-router-dom'
import './style/header.css'

const Header = () => {
  return (
    <header className='Header'>
        <h1 className='Header_h1'><Link to='/'>E-Commerce </Link></h1>
        <nav className='Header_nav'>
            <ul className='Header_ul'>
                <li className='Header_li'> <Link to='/login'>Login</Link> </li>
                <li className='Header_li'> <Link to='/register'>Register</Link> </li>
                <li className='Header_li'> <Link to='/'>Purchases</Link> </li>
                <li className='Header_li'> <Link to='/cart'>Cart</Link> </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
