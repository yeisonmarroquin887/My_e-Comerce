import CategoryAdd from "./productadd/CategoryAdd"
import Image from "./productadd/Image"
import Productadd from "./productadd/Productadd"


const AddProduct = ({ addclose }) => {

  return (
    <div>
      <button onClick={addclose}>Cerrar</button>
      <Productadd/>
   
    </div>
  )
}

export default AddProduct
