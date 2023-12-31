import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Api = import.meta.env.VITE_REACT_APP_URL;

const ProductSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers:{
        setProductsGlobal: (state, action) => action.payload
    }
})

export default ProductSlice.reducer
export const {setProductsGlobal} = ProductSlice.actions

export const getAllproductsThunk = (Url = `${Api}/products`) => dispatch => {
    axios.get(Url)
    .then(res => {dispatch(setProductsGlobal(res.data))
    console.log(res.data)})
    .catch(err => console.log(err))
}