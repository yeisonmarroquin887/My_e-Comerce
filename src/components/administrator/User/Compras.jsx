import React from 'react'
import './clientes.css'

const Compras = ({compra}) => {
    console.log(compra)
  return (
    <div className='compra'>
      <h2>nombre</h2>
      <h3>{compra.product.title}</h3>
      <h2>Cantidad</h2>
      <h3>{compra.quantity}</h3>
      <h2>Precio</h2>
      <h3>{compra.product.price}</h3>
    </div>
  )
}

export default Compras
