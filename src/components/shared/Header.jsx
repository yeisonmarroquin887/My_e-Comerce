import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1><Link to='/'>E-Commerce </Link></h1>
        <nav>
            <ul>
                <li> <Link to='/login'>Login</Link> </li>
                <li> <Link to='/register'>Register</Link> </li>
                <li> <Link to='/'>Purchases</Link> </li>
                <li> <Link to='/cart'>Cart</Link> </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
