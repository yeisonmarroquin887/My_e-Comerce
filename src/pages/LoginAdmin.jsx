import React from "react";
import Administrator from "./Administrator";
import useAunthentication from "../hooks/useAunthentication";
import './style/LoginAdmin.css'
import HeaderAdmin from "../components/shared/HeaderAdmin";

const LoginAdmin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };
    loginAdmint(data);
  };

  const { loginAdmint } = useAunthentication();
  return (
    <article className="login-admin">
      <HeaderAdmin/>
      {localStorage.getItem("token") && localStorage.getItem("Role") ==="admin" ? (
        <Administrator />
      ) : (
        <div className="login-form">
          <br /> <br /><br /><br /><br /><br />
          <form className="form" onSubmit={handleLogin}>
            <h1 className="title">Ingresar...</h1>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email:</label>
              <input className="form-input" id="email" type="email" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password:</label>
              <input className="form-input" id="password" type="password" />
            </div>
            <button className="form-button">Ingresar</button>
          </form>
        </div>
      )}
    </article>
  );
};

export default LoginAdmin;
