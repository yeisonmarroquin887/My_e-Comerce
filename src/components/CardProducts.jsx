import React from "react";
import  '../components/style/cardproduct.css'
import { useNavigate } from "react-router-dom";
import useCrudCart from "../hooks/useCrudCart";

const CardProducts = ({ product }) => {

  const navigate = useNavigate()
  const { addProductToCart } = useCrudCart()

  const HandelSelectProduct = () => {
         navigate(`/product/${product.id}`)
  }

  const purchaseSeguryti = (e) => {
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

  
  return (
            <article onClick={HandelSelectProduct} className="CardProduct">
            
        <header className="CardProduct_header">
          <img className="CardProduct_img img1" src={product?.productImgs[0].url} alt={product.title} />
          <img className="CardProduct_img img2" src={product?.productImgs[1].url} alt={product.title} />
        </header>
        <div className="CardProduct_body">
              <section className="CardProduct_setcion">
            <h4 className="CardProduct_subtitle">{product.brand}</h4>
            <h3 className="CardProduct_title">{product.title}</h3>
            
        </section>
        <div className="CardProduct_price">
          <span className="CardProduct_price-label">Price</span>
          <span className="CardProduct_price-value">{product.price}</span>
        </div>
        <button onClick={purchaseSeguryti} className="CardProduct_btn">
        <i className='bx bxs-cart'></i>
        </button>
        
        </div>
    
      </article>
    

  );
};

export default CardProducts;
