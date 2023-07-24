import { configureStore } from "@reduxjs/toolkit";
import productsGlobal from '../store/slice/products.slice'

const store =configureStore({
      reducer:{
        productsGlobal
      }
})

export default store