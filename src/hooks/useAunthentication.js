import axios from "axios";
import { useSetState } from "react-use";
const Api = import.meta.env.VITE_REACT_APP_URL;

const useAunthentication = () => {
  const createNewUser = (data) => {
    const url = `${Api}/users`;
    axios.post(url, data)
    .then(res => {
      console.log(res)
      alert("Usuario Creado")
    })
    .catch(err => {
      console.log(err)
      alert("Datos incorrectos")
    })
  };

    const [user, setUser] = useSetState()


  const loginUser = (data) => {
    const url = `${Api}/users/login`
    axios.post(url, data)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('name', res.data.user.firstName)
        setUser(res.data)
    })
    .catch(err => {
      console.log(err)
      alert("Datos incorrectos")
    })
  }; 
  console.log(user)

  const createNewAdmin = (data) => {
    const url = `${Api}/administrator`
    axios.post(url, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
};



const loginAdmint = (data)=>{
    const url = `${Api}/administrator/login`
    axios.post(url, data)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('Role', res.data.administrator.role)
        localStorage.setItem('name', res.data.administrator.firstName)
        localStorage.setItem('id', res.data.administrator.id)
        setUser(res.data)
    })
    .catch(err =>{
        localStorage.removeItem('token'),
        console.log(err)
    })
}

  return { createNewUser, loginUser, loginAdmint}
};

export default useAunthentication;
