import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HeaderAdmin from '../components/shared/HeaderAdmin';
import './style/venta.css';

const Api = import.meta.env.VITE_REACT_APP_URL;

const Venta = () => {
  const [Ventas, setVentas] = useState([]);
  const [ProductId, setProductId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const Url = `${Api}/ventas`;
    axios
      .get(Url)
      .then((res) => setVentas(res.data))
      .catch((err) => console.log(err));
  }, []);

  const Register = () => {
    navigate('/RegisterVentas');
  };

  // Calcular el total de ganancias
  const totalGanancias = Ventas.reduce(
    (total, Producto) =>
      total + Producto.PrecioClick * Producto.Cantidad - Producto.Precio * Producto.Cantidad,
    0
  );

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <HeaderAdmin />
      <button className='button_Register-venta' onClick={Register}>
        Registrar Compra
      </button>
      <section className='Venta'>
        <table className='Venta_table'>
          <thead>
            <tr className='primera_fila'>
              <td>Nombre</td>
              <td>Categoria</td>
              <td>Cantidad</td>
              <td>Fecha</td>
              <td>Precio</td>
              <td>Ganancia</td>
            </tr>
          </thead>
          <tbody>
            {Ventas.map((Productos) => (
              <tr className='Ventas_products' key={Productos.id} onClick={() => setProductId(Productos.id)}>
                <td>
                  <b>{Productos.Producto}</b>
                </td>
                <td>{Productos.Categoria}</td>
                <td>{Productos.Cantidad}</td>
                <td>{Productos.Fecha}</td>
                <td>{Productos.Precio * Productos.Cantidad}</td>
                <td>{Productos.PrecioClick * Productos.Cantidad - Productos.Precio * Productos.Cantidad}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className='segunda_fila' colSpan='5'>Total de Ganancias</td>
              <td className='segunda_fila'>{totalGanancias}</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </div>
  );
};

export default Venta;
