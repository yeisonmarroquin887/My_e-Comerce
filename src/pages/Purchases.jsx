import React, { useEffect } from "react";
import usePurchases from "../hooks/usePurchases";
import ProductPurchases from "../components/Purchases/ProductPurchases";

const Purchases = () => {
  const { Purchases, getAllProductsPurchase } = usePurchases();

  useEffect(() => {
    getAllProductsPurchase();
  }, []);


  return (
    <div>
      <h2>Purchases</h2>

      {Purchases?.map((prodPurchase) => (
        <ProductPurchases key={prodPurchase.id} product={prodPurchase} />
      ))}
    </div>
  );
};

export default Purchases;
