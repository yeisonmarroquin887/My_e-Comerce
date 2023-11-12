import axios from 'axios';
import React, { useEffect, useState } from 'react';
import getConfingToken from '../../../utils/getConfingToken';
import { useForm } from 'react-hook-form';
const Api = import.meta.env.VITE_REACT_APP_URL;
import './addproduct.css'

const Productadd = () => {
  const [imagenes, setImagenes] = useState([]);
  const [Category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [ProductId, setProductId] = useState('');



  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      const url = `${Api}/product_images`;
      axios.post(url, formData, getConfingToken())
        .then(res => {
          setImagenes(prevImagenes => [...prevImagenes, res.data.id]);
        })
        .catch(err => console.log(err));
    }
  };

  useEffect(() => {
    const categoryUrl = `${Api}/categoris`;
    axios.get(categoryUrl)
      .then(res => setCategory(res.data))
      .catch(err => console.log(err));
  }, [Category]);

  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    data.categoryId = selectedCategory;
    if(imagenes.length >= 3 || imagenes.length < 4){
          const urlProducts = `${Api}/products`;

    axios.post(urlProducts, data, getConfingToken())
      .then((res) => {
        setProductId(res.data);
        reset()
      })
      .catch((err) => console.log(err));
    }else{
      alert("Debes se seleccionar solo 3 imagenes")
      reset()
    }

  };

  useEffect(() => {
    if (ProductId && imagenes.length > 0) {
      const urlSetImg = `${Api}/products/${ProductId.id}/images`;
      axios.post(urlSetImg, imagenes, getConfingToken())
        .then(res => {
          console.log(res.data);
          reset();
          setProductId(null); 
          setImagenes([])
        })
        .catch(err => console.log(err));
    }
  }, [ProductId, imagenes]);
  

  return (
<div className="form-container">
  <form onSubmit={handleSubmit(submit)} className="product-form">
    <div className="form-group">
      <label htmlFor="image" >Ingresa las 3 imágenes</label>
      <input className="form-control image_c" onChange={handleImage} type="file" id="image" required />
    </div>
    <div className="form-group">
      <label className="form-label" htmlFor="cate">Elige la categoría del producto</label>
      <select className="form-input form-select" id="cate" onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory} required>
        <option value="" disabled>Elige la Categoría</option>
        {
          Category.map(categories => (
            <option key={categories.id} value={categories.id}>{categories.name}</option>
          ))
        }
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="title">Ingresa el nombre del producto</label>
      <input {...register("title")} className="form-control" type="text" id="title" required />
    </div>
    <div className="form-group">
      <label htmlFor="description">Ingresa la descripción del producto</label>
      <input {...register("description")} className="form-control" type="text" id="description" required />
    </div>
    <div className="form-group">
      <label htmlFor="price">Ingresa el precio del producto</label>
      <input {...register("price")} className="form-control" type="number" id="price" required />
    </div>
    <button className="submit-btn">Ingresar</button>
  </form>
</div>
  );
};

export default Productadd;
