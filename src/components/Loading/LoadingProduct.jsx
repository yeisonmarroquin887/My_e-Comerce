import React from 'react'
import './style/LoadingProduct.css'

const LoadingProduct = () => {
  return (
    <div className="loading-containe">
      <div className="loading-spinner"></div>
      <h1 className="loading-text">Cargando<span className="loading-dots">...</span></h1>
    </div>
  )
}

export default LoadingProduct
