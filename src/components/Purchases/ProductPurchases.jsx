import './style/productpurchases.css'

const ProductPurchases = ({product}) => {
    console.log(product)
  return (
    <article className="purcha">
    <img className="purcha_img" src={product.product?.productImgs[0].url} alt="" />
    <h3 className="purcha_title">{product.product.title}</h3>
    <span className="purcha_quantity">{product.quantity}</span>
    <span className="purcha_total">{product.quantity * product.product.price}</span>
    </article>
  )
}

export default ProductPurchases