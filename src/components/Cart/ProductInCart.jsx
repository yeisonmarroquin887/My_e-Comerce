import React, { useState } from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import { useSelector } from 'react-redux'
import './style/productcart.css'

const ProductInCart = ({prodCart}) => {


  const { deleteProductFromCart } = useCrudCart()
  const handleDeleteCart = () => {
     deleteProductFromCart(prodCart.id)
  }
  
  const [a, seta] = useState()
  const [Counter, setCounter] = useState(prodCart.quantity)

  const handleCounter = () => {
    setCounter( Counter + 1)
    seta(cartsGlobal[0].product.price * Counter)
  }
  const handlemenus = () => {
    if(Counter > 0){
      setCounter(Counter - 1)
    }
    
  }
  const { cartsGlobal } = useSelector((state) => state);
  console.log();

  return (
    <article className='prodcart'>
      <header className='prodcart_header'>
        <img className='prodcart_img' src={prodCart.product.images[0].url} alt="" />
      </header>
        <h3 className='prodcart_titl'>{prodCart.product.title}</h3>
      
      <button className='prodcart_delete' onClick={handleDeleteCart}>
      <i className='prodcart_delete-icon bx bx-trash'></i>
      </button>
      <footer className='prodcart_footer'>
        {/*<button className='prodcart_' onClick={handlemenus}>-</button>
        <span className='prodcart_'>{Counter}</span>
        <button className='prodcart_' onClick={handleCounter}>+</button>*/}
        <span className='prodcart_quantity'>{prodCart.quantity}</span>
        <div className='prodcart_subtotal'>
          <span className='prodcart_subtotal-label'>Subtotal</span>
          <span className='prodcart_subtotal-value'>{prodCart.product.price * prodCart.quantity}</span>
        </div>
      </footer>

    </article>
  )
}

export default ProductInCart