import { Link } from "react-router-dom";
import { assets } from "../assets/assets";


const ProductsButton = () => {

  return (
    <div className="flex justify-center items-center mt-10 font-medium">
        <Link to={"/products"} className="group md:flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer">View All Products
        </Link>
    </div>
  )
}

export default ProductsButton;