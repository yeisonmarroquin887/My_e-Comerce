import React, { useState } from 'react';
import './clientes.css';
import Compras from './Compras';

const Cliente = ({ datos }) => {
  const [showCompras, setShowCompras] = useState(false);

  const toggleCompras = () => {
    setShowCompras(!showCompras);
  };

  return (
    <div className='Cliente'>
      <div className='Clientes'>
        <h1>Nombre</h1>
        <h3>
          {datos.firstName} {datos.lastName}
        </h3>
        <h1>Correo</h1>
        <h3>{datos.email}</h3>
        <h1>Telefono</h1>
        <h3>{datos.phone}</h3>
        <button className='buttonC' onClick={toggleCompras}>Compras</button>
      </div>

      {showCompras && (
        <div className='ComprasOverlay'> 
          <div className='ComprasContainer'>
            <button className='CerrarCompras' onClick={toggleCompras}>
              Cerrar
            </button>
            <Compras key={datos.id} compras={datos.purchases} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cliente;
