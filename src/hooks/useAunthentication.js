import axios from "axios";
import { useSetState } from "react-use";

const useAunthentication = () => {
  const createNewUser = (data) => {
    const url = `https://ecomereceapi.onrender.com/api/v1/users`;
    axios.post(url, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  };

    const [user, setUser] = useSetState()


  const loginUser = (data) => {
    const url = `https://ecomereceapi.onrender.com/api/v1/users/login`
    axios.post(url, data)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('name', res.data.user.firstName)
        setUser(res.data)
    })
    .catch(err => console.log(err))
  }; 
  console.log(user)

  const createNewAdmin = (data) => {
    const url = 'https://ecomereceapi.onrender.com/api/v1/administrator'
    axios.post(url, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
};

const loginAdmint = (data)=>{
    const url = 'https://ecomereceapi.onrender.com/api/v1/administrator/login'
    axios.post(url, data)
    .then(res => {
        localStorage.setItem('token', res.data.token)
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
