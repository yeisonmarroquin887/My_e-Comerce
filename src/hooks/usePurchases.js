import axios from "axios"
import getConfingToken from "../utils/getConfingToken"
import { getAllProductsCartThunk } from "../store/slice/cart.slice"
import { useDispatch } from "react-redux"
import { useState } from "react"
const Api = import.meta.env.VITE_REACT_APP_URL;

const usePurchases = () => {

    const [Purchases, setPurchases] = useState()

    const dispatch = useDispatch()

   const buyThisCart = () => {
    const url = `${Api}/purchase`
    axios.post(url, {}, getConfingToken())
    .then(res => {
        dispatch(getAllProductsCartThunk())
        console.log(res)
    })
    .catch(err => console.log(err))
   }

   const getAllProductsPurchase = () => {
    const url = `${Api}/purchase`
    axios.get(url, getConfingToken())
    .then(res => dispatch(setPurchases(res.data)))
    .catch(err => console.log(err))
   }

   return {Purchases, getAllProductsPurchase, buyThisCart}
}
export default usePurchases