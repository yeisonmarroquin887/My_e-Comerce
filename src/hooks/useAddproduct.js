import axios from "axios"
import getConfingToken from "../utils/getConfingToken"
import { useState } from "react";
const Api = import.meta.env.VITE_REACT_APP_URL;

const useAddproduct = (url) => {
const [productId, setproductId] = useState()
const [ImgsId, setImgsId] = useState()
  const creatProduct = (data) => {
  axios.post(url,data,getConfingToken())
  .then(res => setproductId(res.data))
  .catch(err => console.log(err))
  };

  const incluImg = (formData) => {
    console.log(formData)
    const imgUrl = `${Api}/product_images`;
    axios.post(imgUrl,formData,getConfingToken())
    .then(res => setImgsId(res.data))
    .catch(err => console.log(err))
  };

  return { creatProduct, incluImg, productId, ImgsId };
}

export default useAddproduct;


