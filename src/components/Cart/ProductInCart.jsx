import useCrudCart from '../../hooks/useCrudCart';
import './style/productcart.css';
import { useEffect, useState } from 'react';

const ProductInCart = ({ prodCart }) => {
  const { deleteProductFromCart, updateProductInCart } = useCrudCart();

  const [quanti, setQuanti] = useState(prodCart.quantity);
  const [Subtotal, setSubtotal] = useState(prodCart.product.price);

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cartData'));

    if (cartData) {
      const updatedProduct = cartData.find(item => item.id === prodCart.id);
      if (updatedProduct) {
        setQuanti(updatedProduct.quantity);
        setSubtotal(updatedProduct.subtotal); // Use stored subtotal
      }
    }
  }, [prodCart.id]);

  const handleAumentar = () => {
    const newQuantity = quanti + 1;
    updateProductQuantity(prodCart.id, newQuantity, newQuantity * prodCart.product.price);
  };

  const handleMenos = () => {
    if (quanti > 1) {
      const newQuantity = quanti - 1;
      updateProductQuantity(prodCart.id, newQuantity, newQuantity * prodCart.product.price);
    }
  };

  const updateProductQuantity = (productId, newQuantity, newSubtotal) => {
    const updatedProduct = { ...prodCart, quantity: newQuantity, subtotal: newSubtotal };
    updateProductInCart(productId, updatedProduct);

    // Update cart data in localStorage
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    const updatedCartData = cartData.map(item => {
      if (item.id === productId) {
        return updatedProduct;
      }
      return item;
    });
    localStorage.setItem('cartData', JSON.stringify(updatedCartData));

    setQuanti(newQuantity);
    setSubtotal(newSubtotal);
  };

  const handleDeleteCart = () => {
    deleteProductFromCart(prodCart.id);

    // Remove the item from cart data in localStorage
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    const updatedCartData = cartData.filter(item => item.id !== prodCart.id);
    localStorage.setItem('cartData', JSON.stringify(updatedCartData));
  };
  return (
    <article className='prodcart'>
      <header className='prodcart_header'>
        <img className='prodcart_img' src={prodCart?.product.productImgs[0].url} alt='' />
      </header>
      <h3 className='prodcart_titl'>{prodCart.product.title}</h3>

      <button className='prodcart_delete' onClick={handleDeleteCart}>
        <i className='prodcart_delete-icon bx bx-trash'></i>
      </button>
      <footer className='prodcart_footer'>
        <div>
          <button className='prodcart_quantity' onClick={handleMenos}>
            -
          </button>
          <span className='prodcart_quantity'>{quanti}</span>
          <button className='prodcart_quantity' onClick={handleAumentar}>
            +
          </button>
        </div>

        <div className='prodcart_subtotal'>
          <span className='prodcart_subtotal-label'>Subtotal</span>
          <span className='prodcart_subtotal-value'>{Subtotal}</span>
        </div>
      </footer>
    </article>
  );
};

export default ProductInCart;
