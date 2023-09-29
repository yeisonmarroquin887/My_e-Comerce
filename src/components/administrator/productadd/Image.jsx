// src/components/ProductImages.js
import React, { useState } from 'react';
import axios from 'axios';
import getConfingToken from '../../../utils/getConfingToken';
const Api = import.meta.env.VITE_REACT_APP_URL;

const Images = () => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    setSelectedImages([...selectedImages, ...e.target.files]);
  };

  const handleUpload = async () => {
    setIsLoading(true);
    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post(`${Api}/product_images/product/17`, formData, getConfingToken());

      if (response.status === 201) {
        setImages(response.data);
      } else {
        console.error('Error al cargar imágenes');
      }
    } catch (error) {
      console.error('Error al cargar imágenes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/remove/${id}`);
      setImages(images.filter((image) => image.id !== id));
    } catch (error) {
      console.error('Error al eliminar imagen:', error);
    }
  };

  return (
    <div>
      <h1>Product Images</h1>
      <input type="file" multiple onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={isLoading}>
        Cargar Imágenes
      </button>
      {isLoading && <p>Cargando...</p>}
      <div className="image-list">
        {images.map((image) => (
          <div className="image-item" key={image.id}>
            <img src={image.url} alt="Product" />
            <button onClick={() => handleDelete(image.id)}>Eliminar Imagen</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
