import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useAunthentication from "../hooks/useAunthentication";
import deafaultRegisterValues from "../utils/deafaultRegisterValues";
import "./style/register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/shared/Header";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createNewUser } = useAunthentication();
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    const fetchAdminList = async () => {
      try {
        const response = await axios.get("https://ecomereceapi.onrender.com/api/v1/users/admins");
        setAdminList(response.data);
      } catch (error) {
        console.error("Error fetching admin list:", error);
      }
    };

    fetchAdminList();
  }, []);

  const submit = (data) => {
    createNewUser(data);
    reset(deafaultRegisterValues);
  };
console.log(adminList)
  return (
    <article className="Register">
      <Header/>
      <form className="Register_inter" onSubmit={handleSubmit(submit)}>
        <h2 className="Register_title">Inscribirse</h2>
        <div className="regis">
        <div className="Register_div">
            <label className="Register_label" htmlFor="adminId">
              Administrador
            </label>
            <select className="Register_input" {...register("administratorId")} id="adminId" required>
              <option value="">Seleccione un administrador</option>
              {adminList.map(admin => (
                <option key={admin.id} value={admin.id}>
                <h1>{admin.firstName}</h1>
              </option>
              ))}
            </select>
          </div>
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
                  required
                />
              </div>
              <div className="Register_div">
                <label className="Register_label" htmlFor="lastName">
                  Apellidos
                </label>
                <input
                  className="Register_input"
                  {...register("lastName")}
                  type="text"
                  id="lastName"
                  required
                />
              </div>
            </div>

            <div>
              <div className="Register_div">
                <label className="Register_label" htmlFor="email">
                  Correo Electrónico
                </label>
                <input
                  className="Register_input"
                  {...register("email")}
                  type="email"
                  id="email"
                  required
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
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <div className="Register_div">
              <label className="Register_label" htmlFor="phone">
                Teléfono (10 caracteres)
              </label>
              <input
                className="Register_input"
                {...register("phone")}
                type="tel"
                id="phone"
                required
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
