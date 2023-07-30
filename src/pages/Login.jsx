import React, { useEffect } from 'react'
import useAunthentication from '../hooks/useAunthentication'
import './style/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSetState } from 'react-use'
import Logeado from './Logeado'

const Login = () => {
 
  const navigate = useNavigate()

  const deleteToken = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }



  const { loginUser } = useAunthentication()

   const handleLogin = (e) => {
     e.preventDefault()
     const email = e.target.email.value
     const password = e.target.password.value
     const data = {email, password}
     loginUser(data)
   }

 


  return (
    <article className='Login'>

     
     {
      localStorage.getItem('token')
      ?<Logeado deleteToken={deleteToken}/>
      :<> <div className='Login_img'>
        <img className='Login_ing' src="../images/logo-color.png" alt="" />
      </div>
       <form  onSubmit={handleLogin}>
        <div className='Login_title'>
          <h1>¡Bienvenido! Ingrese su correo electronico y contraseña para continuar.</h1>
        </div>
        <div className='Login_div'>
            <label className='Login_label' htmlFor="email">Correo Electronico</label>
            <input className='Login_input' type="email" id='email'/>
        </div>
        <div className='Login_div'>
            <label className='Login_label' htmlFor="password">Contraseña</label>
            <input className='Login_input' type="password" id='password'/>
            <Link to='/reset_password' className='Login_olvidar'>¿Olvidaste tu Contraseña? </Link>
        </div>
        
        
          <button className='Login_bnt'>Ingresar</button>
        
           
       
       
         <span className='Login_span'>¿No tienes cuenta? <Link className='login_link' to='/register'>Inscribirse</Link></span>
    </form>
    </>
     }


     
    </article>
   
  )
}

export default Login