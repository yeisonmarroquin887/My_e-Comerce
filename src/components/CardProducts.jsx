import React from "react";
import  '../components/style/cardproduct.css'
import { useNavigate } from "react-router-dom";
import useCrudCart from "../hooks/useCrudCart";
import Loading from "./Loading/Loading";
import LoadingProduct from "./Loading/LoadingProduct";

const CardProducts = ({ product }) => {

  const navigate = useNavigate()
  const { addProductToCart } = useCrudCart()

  const HandelSelectProduct = () => {
         navigate(`/product/${product.id}`)
  }
  const handelWhass = (e) => {
    e.stopPropagation()
    const productTitle = encodeURIComponent(product.title);
    const message = encodeURIComponent(`Hola, quiero información del producto ${productTitle}. Me interesa comprarlo.\n\nInformación desde el E-Commerce de Yeison Marroquin y Carlos Marroquin`);
    window.open(`https://wa.me/573227222010?text=${message}`, "_blank");
  }

  const purchaseSeguryti = (e) => {
    if(true){
      e.stopPropagation()
      alert("Actualmente, nuestra plataforma no está disponible para realizar compras directamente en ella. Por favor, haga clic en el icono de WhatsApp para llevar a cabo su compra. Agradecemos su comprensión y atención.")
    }else{
         if(localStorage.getItem('token')){
       
    e.stopPropagation()
    const data = {
      quantity: 1,
      productId: product.id
    }
    addProductToCart(data)
    
  
    }else{
      e.stopPropagation()
      navigate('/login')
    }
    }
 
  }

  
  return (
    <div className="CardProduct">
            <article onClick={HandelSelectProduct} className="CardProduct">

        
            
          {
           product?.productImgs[0].url
            ? <header className="CardProduct_header">
    <img className="CardProduct_img img1" src={product?.productImgs[0].url} alt={product.title} />
          <img className="CardProduct_img img2" src={product?.productImgs[1].url} alt={product.title} />
        </header>
        :<LoadingProduct/>
          }
      
        <div className="CardProduct_body">
              <section className="CardProduct_setcion">
            <h4 className="CardProduct_subtitle">{product.brand}</h4>
            <h3 className="CardProduct_title">{product.title}</h3>
            
        </section>
        <div className="CardProduct_price">
          <span className="CardProduct_Aprice-label">Antes:</span>
          <span className="CardProduct_Aprice-value">{Number(product.AnterPrice).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <div className="CardProduct_price">
          <span className="CardProduct_price-label">Ahora:</span>
          <span className="CardProduct_price-value">{Number(product.price).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <button onClick={purchaseSeguryti} className="CardProduct_btn">
        <i className='bx bxs-cart'></i>
        </button>
        <button onClick={handelWhass} className="wha">
            <i className='bx bxl-whatsapp' ></i>
        </button>
        
        </div>

      </article> 
    

    </div>
  
    

  );
};

export default CardProducts;
