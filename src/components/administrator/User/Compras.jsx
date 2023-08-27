import React from 'react';
import './compras.css';

const Compras = ({ compras }) => {
  console.log(compras.price)
  return (
    <div className='Compras'> {/* Agrega la clase CSS al contenedor principal */}
      <h2 className='h'>Compras del Usuario</h2>
      <ul className='u'>
        {compras.map((compra) => (
          <li className='i' key={compra.id}>
            <strong>Producto:</strong> {compra.product.title} <b>Cantidad:</b>  {compra.quantity} <b>Price:</b> {compra.product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Compras;
