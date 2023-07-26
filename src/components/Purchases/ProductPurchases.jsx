
const ProductPurchases = ({product}) => {
    console.log(product)
  return (
    <article>
    <img src={product.product.images[0].url} alt="" />
    <h3>{product.product.title}</h3>
    <span>{product.quantity}</span>
    <span>{product.quantity * product.product.price}</span>
    </article>
  )
}

export default ProductPurchases