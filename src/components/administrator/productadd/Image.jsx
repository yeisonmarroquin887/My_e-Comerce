import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import getConfingToken from '../../../utils/getConfingToken';

const Image = () => {
    const url = 'https://ecomereceapi.onrender.com/api/v1/product_images';

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('image', data.image[0]);

            const response = await axios.post(url, formData, getConfingToken(), {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Imagen cargada exitosamente:', response.data);
            reset();
        } catch (error) {
            console.error('Error al cargar la imagen:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="image">Imagen</label>
                    <input {...register('image')} type="file" />
                </div>
                <button type="submit">Subir Imagen</button>
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="image">Imagen</label>
                    <input {...register('image')} type="file" />
                </div>
                <button type="submit">Subir Imagen</button>
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="image">Imagen</label>
                    <input {...register('image')} type="file" />
                </div>
                <button type="submit">Subir Imagen</button>
            </form>
        </div>
    );
};

export default Image;

