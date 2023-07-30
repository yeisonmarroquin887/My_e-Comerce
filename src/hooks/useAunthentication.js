import axios from "axios";
import { useSetState } from "react-use";
const URL_BASE = import.meta.env.VITE_REACT_APP_URL

const useAunthentication = () => {
  const createNewUser = (data) => {
    const url = `${URL_BASE}/users`;
    axios.post(url, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  };

    const [user, setUser] = useSetState()


  const loginUser = (data) => {
    const url = `${URL_BASE}/users/login`
    axios.post(url, data)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('name', res.data.user.firstName)
        setUser(res.data)
    })
    .catch(err => {
        localStorage.removeItem('token')
        console.log(err)
    })
  }

  return { createNewUser, loginUser, user}
};

export default useAunthentication;
