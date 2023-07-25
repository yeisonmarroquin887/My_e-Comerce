import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfingToken from "../../utils/getConfingToken";

const cartSlice = createSlice({
    name: 'cart',
    initialState: null,
    reducers:{
        setCartGlobal:(state, ation) => ation.payload
    }
})
export const {setCartGlobal} = cartSlice.actions
export default cartSlice.reducer

export const getAllProductsCartThunk = () => dispatch => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    axios.get(url, getConfingToken())
    .then(res => dispatch(setCartGlobal(res.data)))
    .catch(err => console.log(err))
} 