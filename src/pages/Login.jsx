import React from 'react'
import useAunthentication from '../hooks/useAunthentication'
import './style/login.css'
import { Link } from 'react-router-dom'

const Login = () => {

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
      <div className='Login_img'>
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
        </div>
        <button className='Login_bnt'>Ingresar</button>
         <span className='Login_span'>¿No tienes cuenta? <Link className='login_link' to='/register'>Inscribirse</Link></span>
    </form>
    </article>
   
  )
}

export default Login