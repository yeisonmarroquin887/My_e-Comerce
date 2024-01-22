import React from 'react'
import { useNavigate } from "react-router-dom";

const NoLogeado = () => {
 const navigate = useNavigate()
	const  Registrarse = () => {
          navigate('/register')
	}
	const  Ingresar = () => {
		navigate('/login')
  }

  return (
	<div className='Perfil'>
	<div className='Perfil_User'>
	<i class='bx bxs-user-circle' ></i>
	<div className='PerfilIngresar'>
		<button onClick={Ingresar}>Ingresar</button>
		<button onClick={Registrarse} >Registrarse</button>
	</div>
	</div>
	<h1 className='Perfil_empre'>KlickYlisto</h1>

  </div>
  )
}

export default NoLogeado
