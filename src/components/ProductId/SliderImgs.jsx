import React from 'react'
import './style/sliderimgs.css'

const SliderImgs = ({product}) => {
  return (
    <div className='sliderimgs'>
        <img src={product?.images[0].url} alt="" />
    </div>
  )
}

export default SliderImgs
