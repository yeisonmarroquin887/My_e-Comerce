import axios from "axios"
import getConfingToken from "../utils/getConfingToken"
import { getAllProductsCartThunk } from "../store/slice/cart.slice"
import { useDispatch } from "react-redux"

const useCrudCart = () => {

   const dispatch =  useDispatch()
    
    const addProductToCart = (data) => {
        const url = `https://ecomereceapi.onrender.com/api/v1/cart`
        axios.post(url, data, getConfingToken())
        .then(res => {
           dispatch(getAllProductsCartThunk())
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }
     
    const deleteProductFromCart = (id) => {
        const url = `https://ecomereceapi.onrender.com/api/v1/cart/${id}`
        axios.delete(url, getConfingToken())
        .then(res => {
            dispatch(getAllProductsCartThunk())
            console.log(res.data)
        })
        .catch(err => console.log(err))

    }

    const updateProductInCart = (id, data) => {
         const url = `https://ecomereceapi.onrender.com/api/v1/cart/${id}`
         axios.put(url, data, getConfingToken())
         .then(res => {
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
         })
         .catch(err => console.log(err))
    }

    return {addProductToCart, deleteProductFromCart, updateProductInCart}
    
}

export default useCrudCart