import React, { useState } from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import { useSelector } from 'react-redux'
import './style/productcart.css'

const ProductInCart = ({prodCart}) => {


  const { deleteProductFromCart, addProductToCart } = useCrudCart()
  const handleDeleteCart = () => {
     deleteProductFromCart(prodCart.id)
  }
  
  const [priceincre, setpriceincre] = useState(prodCart.product.price * prodCart.quantity)
   const { cartsGlobal } = useSelector((state) => state);
  console.log();
const [Counter, setCounter] = useState(cartsGlobal[0].quantity)
  const handleCounter = () => {
    setCounter( Counter + 1)
    setpriceincre(cartsGlobal[0].product.price * Counter)
  }
  const handlemenus = () => {
    if(Counter > 0){
      setCounter(Counter - 1)
    }
    
  }
 
  


  return (
    <article className='prodcart'>
      <header className='prodcart_header'>
        <img className='prodcart_img' src={prodCart?.product.productImgs[0].url} alt="" />
      </header>
        <h3 className='prodcart_titl'>{prodCart.product.title}</h3>
      
      <button className='prodcart_delete' onClick={handleDeleteCart}>
      <i className='prodcart_delete-icon bx bx-trash'></i>
      </button>
      <footer className='prodcart_footer'>
        <div>
              <button className='prodcart_quantity' onClick={handlemenus}>-</button>
        <span className='prodcart_quantity'>{Counter}</span>
        <button className='prodcart_quantity' onClick={handleCounter}>+</button>
        </div>
    
        
        <div className='prodcart_subtotal'>
          <span className='prodcart_subtotal-label'>Subtotal</span>
          <span className='prodcart_subtotal-value'>{prodCart.product.price * Counter}</span>
        </div>
      </footer>
      

    </article>
  )
}

export default ProductInCart