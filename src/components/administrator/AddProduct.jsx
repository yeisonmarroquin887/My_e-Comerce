import CategoryAdd from "./productadd/CategoryAdd"
import Image from "./productadd/Image"
import Productadd from "./productadd/productadd"


const AddProduct = () => {

  return (
    <div>
      ingrsar producto
      <nav>
        <Image/>
      </nav>
       <nav>
        <Productadd/>
       </nav>
       <nav>
        <CategoryAdd/>
       </nav>
   
    </div>
  )
}

export default AddProduct
