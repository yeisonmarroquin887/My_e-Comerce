// src/components/ForgotPassword.js
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const  RecoverPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    try {
      // Enviar la solicitud POST al backend para solicitar la recuperación de contraseña
      const response = await axios.post('https://ecomereceapi.onrender.com/api/v1/users/reset_password', data);
      if (response.status === 200) {
        // La solicitud fue exitosa, mostrar mensaje al usuario
        alert('Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.');
      }
    } catch (error) {
      // La solicitud falló, mostrar mensaje de error
      alert('Hubo un error al enviar la solicitud. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div>
      <h1>Olvidé mi contraseña</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Correo electrónico:
          <input type="email" {...register('email', { required: 'Este campo es requerido' })} />
        </label>
        {errors.email && <p>{errors.email.message}</p>}
        <button type="submit">Enviar solicitud</button>
      </form>
    </div>
  );
};



export default RecoverPassword