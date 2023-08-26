import React from "react";
import Administrator from "./Administrator";
import useAunthentication from "../hooks/useAunthentication";

const LoginAdmin = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };
    loginAdmint(data);
  };

  const { loginAdmint } = useAunthentication();
  

  return (
    <article>
      <br />
      <br />
      <br />
      <br />
      <br />
       {
        localStorage.getItem('token')
        ?<Administrator/>
        :<>
            <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button>Ingresar</button>
      </form>
        </>
       }
  
    </article>
  );
};

export default LoginAdmin;
