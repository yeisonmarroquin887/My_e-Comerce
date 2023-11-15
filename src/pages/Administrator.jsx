import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import getConfingToken from '../utils/getConfingToken';
import Users from '../components/administrator/Users';
import './style/admin.css';
import AddProduct from '../components/administrator/AddProduct';
import CategoryAdd from '../components/administrator/productadd/CategoryAdd';
const Api = import.meta.env.VITE_REACT_APP_URL;

const Administrator = () => {
  const id = localStorage.getItem('id');
  const navigate = useNavigate();
  const deleteToken = () => {
    localStorage.removeItem('Role')
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    navigate('/')
  };

  const [user, setUser] = useState({ users: [] });
  const [noUser, setnoUser] = useState()
 

  useEffect(() => {
    const url = `${Api}/administrator/${id}`;
    axios
      .get(url, getConfingToken())
      .then((res) => setUser({ users: res.data.users }))
      .catch((err) => setnoUser(err));
  }, [id]);

  const [cambio, setCambio] = useState(true);

  const handleCambio = () => {
    setCambio(false);
  };

  const handleCambi = () => {
    setCambio(true);
  };

  const [addCambio, setaddCambio] = useState(true)
    const addCambi = () => {
      setaddCambio(false)
    }
    const addclose = () => {
      setaddCambio(true)
    }

    const [Category, setCategory] = useState(true)

    const category = () => {
       setCategory(false)
    }
    const categoryClose = () => {
      setCategory(true)
   }
   
   const Ventas = () => {
      navigate('/ventas')
   }

  return (
    <div className='admin'>
    <br /><br /><br /><br /><br />
    <h1>Hola {localStorage.getItem('name')} aqui tienes tus clientes</h1>
    <button className='buttonC' onClick={deleteToken}>Cerrar sesión</button>
    <button className='buttonC' onClick={handleCambio}>Clientes</button>
    <button className='buttonC' onClick={addCambi}>Crear Producto</button>
    <button className='buttonC' onClick={category}>Crear Category</button>
    <button className='buttonC' onClick={Ventas}>Registros de compras</button>

    
  
    <div className={cambio ? 'cerrado' : 'cliente'}>
      <br />
      <button className='buttonC' onClick={handleCambi}>cerrar</button>
      {user.users.length === 0 ? (
        <p className='no-clients'>No tienes clientes</p>
      ) : (
        <Users key={user.id} user={user} />
        
       
      )}
       
    </div>
    <div className={addCambio ? 'CLOSE' : 'ADD'}>
        <AddProduct addclose={addclose}/>
      </div>
      <div className={Category ? "categoryClose" : "category"}>
        <CategoryAdd categoryClose={categoryClose}/>
      </div>
  

   
  </div>
  );
};

export default Administrator;
