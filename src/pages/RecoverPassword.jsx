import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const RecoverPassword = () => {
  const { register, handleSubmit, reset } = useForm();

  
  const submit = (data) => {
     data.frontBaseUrl='http://localhost:5173/#'
    console.log(data)
    const url = 'https://ecomereceapi.onrender.com/api/v1/users/reset_password'
    axios.post(url, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  };

  return (
    <div>
      <h1>Olvidé mi contraseña</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">Ingresa tu correo</label>
          <input {...register('email')} type="email" id="email" />
        </div>
        <button>enviar</button>
      </form>
    </div>
  );
};

export default RecoverPassword;
