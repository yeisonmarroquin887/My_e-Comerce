import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsCartThunk } from "../store/slice/cart.slice";
import ProductInCart from "../components/Cart/ProductInCart";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsCartThunk());
  }, []);

  const { cartsGlobal } = useSelector((state) => state);
  console.log(cartsGlobal);

  const totalPriceCart = cartsGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product.price, 0)
  console.log({totalPriceCart})

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {
        cartsGlobal?.map((prodCart) => (
          <ProductInCart key={prodCart.id} prodCart={prodCart} />
        ))
        }
      </div>
      <footer>
        <h4>Total:</h4>
        <h3>{totalPriceCart}</h3>
        <button>Buy now</button>
      </footer>
    </div>
  );
};

export default Cart;
