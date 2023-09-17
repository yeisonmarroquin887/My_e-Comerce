import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './style/recoverpassword.css'
import Header from "../components/shared/Header";

const RecoverPassword = () => {
  const { register, handleSubmit, reset } = useForm();

  
  const submit = (data) => {  
     data.frontBaseUrl='https://keen-fudge-5ae06d.netlify.app/#'
    console.log(data)
    const url = 'https://ecomereceapi.onrender.com/api/v1/users/reset_password'
    axios.post(url, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  };

  return (
    <div className="recover">
      <Header/>
        <div className="recover_marco">
            <div className="recover_priva">
        <i className='recove_icon bx bxs-lock-alt'></i>
               <h1 className="recover_h1">Recuperar contraseña</h1>
            </div>
      <form className="recover_form" onSubmit={handleSubmit(submit)}>
        <div className="recover_div">
          <label className="recover_label" htmlFor="email">Ingresa tu correo</label>
          <input className="recover_input" {...register('email')} type="email" id="email" />
        </div>
        <button className="recover_button">enviar</button>
      </form>
        </div>
   
    </div>
  );
};

export default RecoverPassword;
