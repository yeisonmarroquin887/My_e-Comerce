import React from "react";
import { useForm } from "react-hook-form";
import useAunthentication from "../hooks/useAunthentication";
import deafaultRegisterValues from "../utils/deafaultRegisterValues";
import "./style/register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const { createNewUser } = useAunthentication();

  const submit = (data) => {
    createNewUser(data);
    reset(deafaultRegisterValues);
  };

  return (
    <article className="Register">
      <form className="Register_inter" onSubmit={handleSubmit(submit)}>
        <h2 className="Register_title">Inscribirse</h2>
        <div className="regis">
          <div className="padre">
            <div>
              <div className="Register_div">
                <label className="Register_label" htmlFor="firstName">
                  Nombres
                </label>
                <input
                  className="Register_input"
                  {...register("firstName")}
                  type="text"
                  id="firstName"
                />
              </div>
              <div className="Register_div">
                <label className="Register_label" htmlFor="lastName">
                  Apellidos
                </label>
                <input
                  className="Register_input"
                  t
                  {...register("lastName")}
                  type="text"
                  id="lastName"
                />
              </div>
            </div>

            <div>
              <div className="Register_div">
                <label className="Register_label" htmlFor="email">
                  Correo Electronico
                </label>
                <input
                  className="Register_input"
                  {...register("email")}
                  type="email"
                  id="email"
                />
              </div>
              <div className="Register_div">
                <label className="Register_label" htmlFor="password">
                  Contraseña
                </label>
                <input
                  className="Register_input"
                  {...register("password")}
                  type="password"
                  id="password"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="Register_div">
              <label className="Register_label" htmlFor="phone">
                Teléfono(10 caracteres)
              </label>
              <input
                className="Register_input"
                {...register("phone")}
                type="tel"
                id="phone"
              />
            </div>
            <div className="fin">
              <button className="Register_btn">Registrar</button>
              <span className="register_span">
                ¿Ya tienes una cuenta? <Link className="register_link" to="/login">Acceso</Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </form>
    </article>
  );
};

export default Register;
