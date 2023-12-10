import React, { useRef, useState } from 'react'
import './style/productinfo.css'
import useCrudCart from '../../hooks/useCrudCart'

const ProductIdInfo = ({product}) => {

    const [quantity, setQuantity] = useState(1)

    const { addProductToCart } = useCrudCart()

    const handelAdd = () => {
        setQuantity(quantity + 1)
    }

    const handelReset = () => {
        if(quantity > 0){
             setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = () => {
        if(true){
            alert("Actualmente, nuestra plataforma no está disponible para realizar compras directamente en ella. Por favor, haga clic en el icono de WhatsApp para llevar a cabo su compra. Agradecemos su comprensión y atención.")
        }else{
             const data = {
            quantity,
            productId: product.id
        }  
        }
      
     
        addProductToCart(data)
    }
     const handlewhas = () => {
        const message = encodeURIComponent(`Hola, quiero información del producto ${product.title}. Me interesa comprarlo.\n\nInformación desde el E-Commerce de Yeison Marroquin y Carlos Marroquin`);
        window.open(`https://wa.me/573227222010?text=${message}`, "_blank");
     }

  return (
    <section className='ProductInfo'>
     <h3 className='ProductInfo_brand'>{product?.brand}</h3>
     <h2 className='ProductInfo_title'>{product?.title}</h2>
     <p className='ProductInfo_description'>{product?.description}</p>
     <footer className='ProductInfo_footer'>
        <div className='ProductInfo_purchase'>
               <div className='ProductInfo_efect'>
            <span className='ProductInfo_subprice'>Price</span>
            <span className='ProductInfo_price'>${product?.price}</span>
        </div>
        <div className='ProductInfo_quantity'>
            <span className='ProductInfo_subprice'>Quantity</span>
            <div className='ProductInfo_counter'>
                <button className='ProductInfo_reset' onClick={handelReset}>-</button>
                <div className='ProductInfo_uni'>{quantity}</div>
                <button className='ProductInfo_add' onClick={handelAdd}>+</button>
            </div>
        </div>
        </div>
     
        <button onClick={handlewhas} className='ProductInfo_button'>Add to cart<i className='cart_btnn bx bxs-cart-download'></i></button>
     </footer>
    </section>
  )
}

export default ProductIdInfo