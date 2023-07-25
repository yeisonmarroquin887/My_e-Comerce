import React from 'react'
import useAunthentication from '../hooks/useAunthentication'

const Login = () => {

  const { loginUser } = useAunthentication()

   const handleLogin = (e) => {
     e.preventDefault()
     const email = e.target.email.value
     const password = e.target.password.value
     const data = {email, password}
     loginUser(data)
   }


  return (
    <form onSubmit={handleLogin}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email'/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password'/>
        </div>
        <button>Sing in</button>
    </form>
  )
}

export default Login