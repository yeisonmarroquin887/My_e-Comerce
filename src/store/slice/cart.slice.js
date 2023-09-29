import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfingToken from "../../utils/getConfingToken";
const Api = import.meta.env.VITE_REACT_APP_URL;

const cartSlice = createSlice({
  name: 'cart',
  initialState: null,
  reducers: {
    setCartGlobal: (state, action) => action.payload,
    updateQuantityInCart: (state, action) => {
      // Busca el producto en el carrito y actualiza su cantidad
      const productId = action.payload.productId;
      const newQuantity = action.payload.quantity;

      const productToUpdate = state.find((item) => item.product.id === productId);
      if (productToUpdate) {
        productToUpdate.quantity = newQuantity;
      }
    },
  },
});

export const { setCartGlobal, updateQuantityInCart } = cartSlice.actions
export default cartSlice.reducer

export const getAllProductsCartThunk = () => dispatch => {
  const url = `${Api}/cart`
  axios.get(url, getConfingToken())
    .then(res => dispatch(setCartGlobal(res.data)))
    .catch(err => console.log(err))
}
