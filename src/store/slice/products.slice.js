import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ProductSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers:{
        setProductsGlobal: (state, action) => action.payload
    }
})

export default ProductSlice.reducer
export const {setProductsGlobal} = ProductSlice.actions

export const getAllproductsThunk = (Url = "https://e-commerce-api-v2.academlo.tech/api/v1/products") => dispatch => {
    axios.get(Url)
    .then(res => dispatch(setProductsGlobal(res.data)))
    .catch(err => console.log(err))
}