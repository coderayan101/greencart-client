import { useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ProductCart = ({product}) => {

   const {currency, addToCart, removeFromCart, cartItems, navigate} = useAppContext();

    return product && (
        <div onClick={()=> {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}} className="border border-gray-500/20 rounded-2xl md:px-4 px-3 pb-3 bg-white min-w-46 max-w-56 w-full">
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-112 transition max-w-26 md:max-w-36" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-sm text-center">
                {/* <p>{product.category}</p> */}
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                <p className="text-gray-700 font-medium text-sm truncate w-full mt-2">{product.weight}</p>
                <p className="md:text-xl text-base font-medium text-primary mt-2">
                    {currency}{product.offerPrice}{" "} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}₹{product.price}</span>
                </p>
                {/* <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                            <img key={i} className="md:w-3.5 w-3" src={i<4 ? assets.star_icon : assets.star_dull_icon} />
                    ))}
                    <p>({4})</p>
                </div> */}
                <div className="flex items-end justify-between">
                    {/* <p className="md:text-xl text-base font-medium text-primary">
                        {currency}₹{product.offerPrice}{" "} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}₹{product.price}</span>
                    </p> */}
                    <div onClick={(e)=> {e.stopPropagation()}} className="text-primary m-auto">
                        {!cartItems[product._id] ? (
                            <button className="mt-5 w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 px-5 flex items-center justify-center gap-2 font-medium transition" onClick={() => addToCart(product._id)} >
                                <img src={assets.cart_icon} alt="cart_icon" />
                                অর্ডার করুন
                            </button>
                        ) : (
                            <div className="mt-5 w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 flex items-center justify-center gap-2 font-medium transition">
                                <button onClick={() => {removeFromCart(product._id)}} className="cursor-pointer text-md px-2 h-full" >
                                    - 
                                </button>
                                <span className="w-5 text-center">{cartItems[product._id]}</span>
                                <button onClick={() => {addToCart(product._id)}} className="cursor-pointer text-md px-2 h-full" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                    {/* Whatsapp Button */}
                    {/* <button className="mt-5 w-12 bg-primary hover:bg-primary/90 text-white rounded-xl py-3 flex items-center justify-center gap-2 font-medium transition">
                        <WhatsAppIcon 
                             sx={{
                                color: "#25D366",
                                fontSize: "20px" // WhatsApp green
                            }}
                        />
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default ProductCart;