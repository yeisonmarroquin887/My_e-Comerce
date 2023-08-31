import React from 'react';
import './style/productpurchases.css';

const ProductPurchases = ({ product }) => {
  const totalPrice = product.quantity * product.product.price;

  return (
    <div className="product-purchases">
      <div className="product-purchase">
        <img className="product-image" src={product.product.productImgs[0].url} alt="" />
        <div className="product-details">
          <h3 className="product-title">{product.product.title}</h3>
          <span className="product-quantity">Quantity: {product.quantity}</span>
        </div>
      </div>
      <div className="total-price">
        <span className="total-label">Total Price:</span>
        <span className="total-value">${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductPurchases;
