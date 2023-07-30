import React, { useState } from 'react'
import './style/sliderimgs.css'

const SliderImgs = ({product}) => {
const [NumberImg, setNumberImg] = useState(0)
  const objStyle = {
    transform: `translateX(calc(-${NumberImg}/3*100%))`
  }
 

  const handlePreviouse = () => {
    if(NumberImg > 0){
      setNumberImg(NumberImg - 1)
    }
  }

  const handleNex = ( ) => {
    if(NumberImg < 2){
      setNumberImg(NumberImg +1)
    }
  }

  console.log(product)

  return (
    <div className='sliderimgs'>
      <button onClick={handlePreviouse} className='sliderimgs_arr slider_left'>&lt;</button>
      <div style={objStyle} className='sliderimgs_interior'>
        {
        product?.productImgs.map(image => (
          <div className='sliderimgs_img_container'>
            <img className='sliderimgs_img' key={image.id} src={image.url} alt="" />
          </div>
        ))
      }
      </div>
      <button onClick={handleNex} className='sliderimgs_arr slider_right'>&gt;</button>
    </div>
  )
}

export default SliderImgs
