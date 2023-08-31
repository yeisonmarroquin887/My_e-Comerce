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
    localStorage.removeItem('tokenAdmint');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    navigate('/')
  };

  const [user, setUser] = useState({ users: [] });
  const [noUser, setnoUser] = useState()
 

  useEffect(() => {
    const url = `https://ecomereceapi.onrender.com/api/v1/administrator/${id}`;
    axios
      .get(url, getConfingToken())
      .then((res) => setUser({ users: res.data.users }))
      .catch((err) => setnoUser(err));
  }, [id]);

  console.log(user);
  console.log(noUser)

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
    <h1>Hola {localStorage.getItem('name')} aqui tienes tus clientes</h1>
    <button className='buttonC' onClick={deleteToken}>Cerrar sesión</button>
    <button className='buttonC' onClick={handleCambio}>Clientes</button>
  
    <div className={cambio ? 'cerrado' : 'cliente'}>
      <br />
      <button className='buttonC' onClick={handleCambi}>cerrar</button>
      {user.users.length === 0 ? (
        <p className='no-clients'>No tienes clientes</p>
      ) : (
        <Users key={user.id} user={user} />
      )}
    </div>
  </div>
  );
};

export default Administrator;
