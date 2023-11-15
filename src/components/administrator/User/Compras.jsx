import React from 'react';
import './compras.css';

const Compras = ({ compras }) => {
  console.log(compras);
  const productsTotal = {};

  compras.forEach((compra) => {
    const { id, quantity, product } = compra;
    if (productsTotal[id]) {
      productsTotal[id].quantity += quantity;
    } else {
      productsTotal[id] = { product, quantity };
    }
  });

  const totalPrice = Object.values(productsTotal).reduce(
    (acc, { product, quantity }) => acc + quantity * product.price,
    0
  );


  return (
    <div className='Compras'>
      <h2 className='h'>Compras del Usuario</h2>
      <ul className='u'>
        {Object.values(productsTotal).map((productInfo) => (
          <li className='i' key={productInfo.product.id}>
            <div className="product-details">
              <div className="product-title">{productInfo.product.title}</div>
              <div className='qu'><strong>Cantidad:</strong> {productInfo.quantity}</div>
              <div className='qu'><strong>Precio:</strong> {productInfo.product.price}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="total-price">
        <span className="total-label">Precio Total:</span>
        <span className="total-value">${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Compras;