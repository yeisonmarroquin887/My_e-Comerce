import CategoryAdd from "./productadd/CategoryAdd"
import Image from "./productadd/Image"
import Productadd from "./productadd/Productadd"
import './productadd/addproduct.css'

const AddProduct = ({ addclose }) => {

  return (
    <div className="mm">
      <button onClick={addclose}>Cerrar</button>
      <Productadd/>
   
    </div>
  )
}

export default AddProduct
