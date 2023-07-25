import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slice/cart.slice'
import ProductInCart from '../components/Cart/ProductInCart'

const Cart = () => {

   const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProductsCartThunk())
    },[])

   const { cartsGlobal } = useSelector(state => state)
   console.log(cartsGlobal)
  return (
    <div>
        <h2>Cart</h2>
       {
        cartsGlobal?.map(prodCart => (
            <ProductInCart key={prodCart.id} prodCart={prodCart}/>
        ))
       }
    </div>
  )
}

export default Cart