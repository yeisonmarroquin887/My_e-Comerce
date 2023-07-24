import React, { useState } from 'react'

const ProductIdInfo = ({product}) => {

    const [quantity, setQuantity] = useState(1)

    const handelAdd = () => {
        setQuantity(quantity + 1)
    }

    const handelReset = () => {
        if(quantity > 0){
             setQuantity(quantity - 1)
        }
    }


  return (
    <section>
     <h3>{product?.brand}</h3>
     <h2>{product?.title}</h2>
     <p>{product?.description}</p>
     <footer>
        <div>
            <span>Price</span>
            <span>{product?.price}</span>
        </div>
        <div>
            <span>Quantity</span>
            <div>
                <button onClick={handelReset}>-</button>
                <div>{quantity}</div>
                <button onClick={handelAdd}>+</button>
            </div>
        </div>
        <button>Add to cart <i className='bx bxs-cart-download'></i></button>
     </footer>
    </section>
  )
}

export default ProductIdInfo