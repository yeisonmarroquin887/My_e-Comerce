import axios from "axios"
import getConfingToken from "../utils/getConfingToken"
import { getAllProductsCartThunk } from "../store/slice/cart.slice"
import { useDispatch } from "react-redux"
import { useState } from "react"

const usePurchases = () => {

    const [Purchases, setPurchases] = useState()

    const dispatch = useDispatch()

   const buyThisCart = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.post(url, {}, getConfingToken())
    .then(res => {
        dispatch(getAllProductsCartThunk())
        console.log(res)
    })
    .catch(err => console.log(err))
   }

   const getAllProductsPurchase = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.get(url, getConfingToken())
    .then(res => dispatch(setPurchases(res.data)))
    .catch(err => console.log(err))
   }

   return {Purchases, getAllProductsPurchase, buyThisCart}
}
export default usePurchases