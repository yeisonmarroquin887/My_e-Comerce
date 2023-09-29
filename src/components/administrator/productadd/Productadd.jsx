import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAddproduct from '../../../hooks/useAddproduct';
import axios from 'axios';
import getConfingToken from '../../../utils/getConfingToken';
import defaultformProduct from '../../../utils/defaultformProduct';
import './addproduct.css'
const Api = import.meta.env.VITE_REACT_APP_URL;

const Productadd = () => {
  const [images, setImages] = useState([]);
  const [Category, setCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('');
  const url = `${Api}/products`;
  const { creatProduct, incluImg, productId, ImgsId } = useAddproduct(url);
  const { register, handleSubmit, reset } = useForm();

  const IdProduct = productId?.id;
  const setUrl = `${Api}/products/${IdProduct}/images`
  const IdImgs = ImgsId?.map(id => (
    id.id
  ))
  axios.post(setUrl, IdImgs, getConfingToken())
  .then(res => console.log(res.data))
  .catch(err => err)

  const img = (e) => {
    const files = e.target.files;
    setImages([...images, ...files]);
  };

  const submit = (data) => {
    data.categoryId = parseInt(selectedCategory, 10)

      // Enviar imágenes al backend
      const formData = new FormData();
      images.forEach((image) => {
        formData.append('images', image);
      });
      if(images.length === 3 && selectedCategory){
        creatProduct(data)
        incluImg(formData) 
        reset(defaultformProduct)
        alert("Producto Creado")
      }else{
         alert("te faltan datos, ingresa lo que te pide")
         reset(defaultformProduct)
      }
   
      
  };
  useEffect(()=>{
      const categoryUrl = `${Api}/categoris`
  axios.get(categoryUrl)
  .then(res => setCategory(res.data))
  .catch(err => console.log(err))
  },[])


  

  return (
<div class="form-container">
  <form action="" onSubmit={handleSubmit(submit)}>
    <div>
      <label className="form-label" htmlFor="imgs">Ingresa tres imágenes</label>
      <input className="form-input form-file" type="file" multiple onChange={img} />
    </div>
    <div>
      <label className="form-label" htmlFor="cate">Elige la categoría del producto</label>
      <select className="form-input form-select" id="cate" onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="" disabled>Elige la Categoría</option>
        {
           Category.map(categoris => (
            <option key={categoris.id} value={categoris.id}>{categoris.name}</option>
           ))
        }
      </select>
    </div>
    <div>
      <label className="form-label" htmlFor="title">Nombre del Producto</label>
      <input className="form-input" type="text" id="title" {...register('title')} required />
    </div>
    <div>
      <label className="form-label" htmlFor="des">Descripción del Producto</label>
      <textarea className="form-input" id="des" {...register('description')} rows="6" required></textarea>
    </div>
    <div>
      <label className="form-label" htmlFor="price">Precio del Producto</label>
      <input className="form-input" type="number" id="price" {...register('price')} required />
    </div>
    <button className="form-button" type="submit">Crear</button>
  </form>
</div>


  );
};

export default Productadd;

