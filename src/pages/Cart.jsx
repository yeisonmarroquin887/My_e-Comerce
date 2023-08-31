import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsCartThunk } from '../store/slice/cart.slice';
import ProductInCart from '../components/Cart/ProductInCart';
import usePurchases from '../hooks/usePurchases';
import './style/cart.css';
import Header from '../components/shared/Header';

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsCartThunk());
  }, []);

  const { cartsGlobal } = useSelector((state) => state);
  const [totalPriceCart, setTotalPriceCart] = useState(0);

  useEffect(() => {
    if (cartsGlobal) {
      const newTotalPrice = cartsGlobal.reduce(
        (acc, cv) => acc + cv.quantity * cv.product.price,
        0
      );
      setTotalPriceCart(newTotalPrice);
    }
  }, [cartsGlobal]);

  const { buyThisCart } = usePurchases();

  return (
    <div className='cart'>
      <Header />
      <br />
      <br />

      <h2 className='cart_title'>Cart</h2>
      <div className='cart_container'>
        {cartsGlobal?.map((prodCart) => (
          <ProductInCart
            key={prodCart.id}
            prodCart={prodCart}
            setTotalPriceCart={setTotalPriceCart} // Pasar la función al componente hijo
          />
        ))}
      </div>
      <footer className='cart_footer'>
        <h4 className='cart_total-label'>Total:</h4>
        <h3 className='cart_total-value'>{totalPriceCart}</h3>
        <button className='cart_btn' onClick={buyThisCart}>
          Buy now
        </button>
      </footer>
    </div>
  );
};

export default Cart;
