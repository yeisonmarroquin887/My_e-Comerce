import React, { useEffect, useState } from 'react';
import usePurchases from '../hooks/usePurchases';
import ProductPurchases from '../components/Purchases/ProductPurchases';
import './style/purchase.css';
import Header from '../components/shared/Header';

const Purchases = () => {
  const { Purchases, getAllProductsPurchase } = usePurchases();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getAllProductsPurchase();
  }, []);

  useEffect(() => {
    if (Purchases) {
      const newTotalPrice = Purchases.reduce(
        (acc, product) => acc + product.quantity * product.product.price,
        0
      );
      setTotalPrice(newTotalPrice);
    }
  }, [Purchases]);

  return (
    <div className="purchase">
      <Header />
      <h2 className="purchase-title">Mis Compras</h2>

      <div className="purchase-product">
        {Purchases?.map((prodPurchase) => (
          <ProductPurchases key={prodPurchase.id} product={prodPurchase} />
        ))}
      </div>

      <div className="total-price">
        <span className="total-label">Total Final:</span>
        <span className="total-value">${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Purchases;
