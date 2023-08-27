import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getConfingToken from '../utils/getConfingToken';
import Users from '../components/administrator/Users';
import './style/admin.css';

const Administrator = () => {
  const id = localStorage.getItem('id');
  const navigate = useNavigate();
  const deleteToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    navigate('/loginadmin'); // Redireccionar al inicio de sesión después de cerrar sesión
  };

  const [user, setUser] = useState({ users: [] });

  useEffect(() => {
    const url = `https://ecomereceapi.onrender.com/api/v1/administrator/${id}`;
    axios
      .get(url, getConfingToken())
      .then((res) => setUser({ users: res.data.users }))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(user);

  const [cambio, setCambio] = useState(true);

  const handleCambio = () => {
    setCambio(false);
  };

  const handleCambi = () => {
    setCambio(true);
  };



  return (
    <div className='admin'>
      <br /><br /><br /><br /><br />
       <button className='buttom' onClick={deleteToken}>Cerrar sesión</button>
      <button className='buttom'  onClick={handleCambio}>Clientes</button>
      <h1>hola</h1>
      <div className={cambio ? 'cerrado' : 'cliente'}>
        <br />
        <button className='buttom'  onClick={handleCambi}>cerrar</button>
        {user.users.length === 0 ? (
          'No tienes clientes'
        ) : (
          <Users key={user.id} user={user} />
        )}
       
      </div>
      
    </div>
  );
};

export default Administrator;
