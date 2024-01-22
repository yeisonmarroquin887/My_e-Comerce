import React from 'react'
import './style/Perfil.css'

const Perfil = ({name}) => {

	const deleteToken = () => {
		localStorage.removeItem("name")
		localStorage.removeItem("token")
		localStorage.removeItem("darkMode")
		name(null)
	}

  return (
	<div className='Perfil'>
	  <div className='Perfil_User'>
	  <i class='bx bxs-user-circle' ></i>
	  <h1>{localStorage.getItem('name')} <br /> <button className='Perfil_btn' onClick={deleteToken}>Cerrar secion</button></h1>
	  </div>
	  <h1 className='Perfil_empre'>KlickYlisto</h1>

	</div>
  )
}

export default Perfil
