// src/pages/ResetPassword.js
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const UpdatePassword = () => {
  const { token } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`https://ecomereceapi.onrender.com/api/v1/users/reset_password/${token}`, data);
      if (response.status === 200) {
        alert('Contraseña actualizada correctamente.');
      }
    } catch (error) {
      alert('Hubo un error al actualizar la contraseña. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div>
      <h1>Actualizar contraseña</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nueva contraseña:
          <input type="password" {...register('password', { required: 'Este campo es requerido' })} />
        </label>
        {errors.password && <p>{errors.password.message}</p>}
        <label>
          Confirmar contraseña:
          <input
            type="password"
            {...register('confirmPassword', {
              required: 'Este campo es requerido',
              validate: (value) => value === password || 'Las contraseñas no coinciden',
            })}
          />
        </label>
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button type="submit">Actualizar contraseña</button>
      </form>
    </div>
  );
};




export default UpdatePassword