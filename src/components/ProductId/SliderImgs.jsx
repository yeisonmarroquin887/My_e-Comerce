import React from 'react'

const SliderImgs = ({product}) => {
  return (
    <div>
        <img src={product?.images[0].url} alt="" />
    </div>
  )
}

export default SliderImgs
