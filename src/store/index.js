import { configureStore } from "@reduxjs/toolkit";
import productsGlobal from '../store/slice/products.slice'
import cartsGlobal from '../store/slice/cart.slice'

const store =configureStore({
      reducer:{
        productsGlobal,
        cartsGlobal
      }
})

export default store