import React from 'react';
import './style/Loading.css'; // Asegúrate de tener un archivo CSS para estilizar la pantalla de carga

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <h1 className="loading-text">Cargando<span className="loading-dots">...</span></h1>
    </div>
  );
}

export default Loading;
