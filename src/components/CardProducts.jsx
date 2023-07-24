import React from "react";
import  '../components/style/cardproduct.css'
import { useNavigate } from "react-router-dom";

const CardProducts = ({ product }) => {

  const navigate = useNavigate()

  const HandelSelectProduct = () => {
         navigate(`/product/${product.id}`)
  }
  
  return (
      <article onClick={HandelSelectProduct} className="CardProduct">
        <header className="CardProduct_header">
          <img className="CardProduct_img img1" src={product.images[0].url} alt="" />
          <img className="CardProduct_img img2" src={product.images[1].url} alt="" />
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
        <button className="CardProduct_btn">
        <i class='bx bxs-cart'></i>
        </button>
        </div>
    
      </article>
  );
};

export default CardProducts;
