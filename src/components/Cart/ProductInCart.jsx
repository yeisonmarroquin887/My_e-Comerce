import React, { useState, useEffect } from 'react';
import useCrudCart from '../../hooks/useCrudCart';
import { useSelector } from 'react-redux';
import './style/productcart.css';

const ProductInCart = ({ prodCart,  setTotalPriceCart  }) => {
  const { deleteProductFromCart, addProductToCart } = useCrudCart();
  const { cartsGlobal } = useSelector((state) => state);

  const [Counter, setCounter] = useState(prodCart.quantity);
  const [subtotal, setSubtotal] = useState(prodCart.product.price * prodCart.quantity);

  const handleDeleteCart = () => {
    deleteProductFromCart(prodCart.id);
  };
  const handleCounter = (change) => {
    const newCounter = Counter + change;

    if (newCounter >= 0) {
      setCounter(newCounter);
      const newSubtotal = prodCart.product.price * newCounter;
      setSubtotal(newSubtotal);

      // Actualizar el precio total en el componente padre
      setTotalPriceCart((prevTotal) => prevTotal + (prodCart.product.price * change));
    }
  };

  useEffect(() => {
    const newSubtotal = prodCart.product.price * Counter;
    setSubtotal(newSubtotal);
  }, [Counter, prodCart.product.price]);

  return (
    <article className='prodcart'>
      <header className='prodcart_header'>
        <img className='prodcart_img' src={prodCart?.product.productImgs[0].url} alt='' />
      </header>
      <h3 className='prodcart_titl'>{prodCart.product.title}</h3>

      <button className='prodcart_delete' onClick={handleDeleteCart}>
        <i className='prodcart_delete-icon bx bx-trash'></i>
      </button>
      <footer className='prodcart_footer'>
        <div>
          <button className='prodcart_quantity' onClick={() => handleCounter(-1)}>
            -
          </button>
          <span className='prodcart_quantity'>{Counter}</span>
          <button className='prodcart_quantity' onClick={() => handleCounter(1)}>
            +
          </button>
        </div>

        <div className='prodcart_subtotal'>
          <span className='prodcart_subtotal-label'>Subtotal</span>
          <span className='prodcart_subtotal-value'>{subtotal}</span>
        </div>
      </footer>
    </article>
  );
};

export default ProductInCart;
