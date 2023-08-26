import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import getConfingToken from '../utils/getConfingToken'
import { useSetState } from 'react-use'
import useFetch from '../hooks/useFetch'
import Users from '../components/administrator/Users'
import AddProduct from '../components/administrator/AddProduct'
import './style/admin.css'

const Administrator = () => {
    const id = localStorage.getItem('id')
    const navigate = useNavigate()
    const deleteToken = () => {
        const token = localStorage.getItem('token')
        if(token){
            localStorage.removeItem('token')
            localStorage.removeItem('name')
            navigate('/loginadmin')
        }
    }

    const [user, setUser] = useSetState()
  
 
  

    useEffect(() => {
           const url = `https://ecomereceapi.onrender.com/api/v1/administrator/${id}`
    axios.get(url,  getConfingToken())
    .then(res => setUser(res.data))
    .catch(err => console.log(err))
    },[id])
  

   
    console.log(user)
    const [cambio, setCambio] = useSetState(true)
    const handelCambio = () => {
        setCambio(false)
    }
    const handelCambi = () => {
        setCambio(true)
    }
  return (
    <div className='admin'>
        <p onClick={handelCambio}>Clientes</p>
       <h1>hola</h1>
     
       <div className={cambio ? "cerrado" : "clientes"}>
        <br />
        <button onClick={handelCambi}>cerrar</button>
         {
            user.users === 0
            ? "no tienes clientes"
            :(
             <Users key={user.id} user={user}/>
                
            )
         }
        
       </div>
       <button onClick={deleteToken}>cerrar session </button>
    </div>
  )
}

export default Administrator
