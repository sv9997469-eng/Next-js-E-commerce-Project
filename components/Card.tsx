import Image from "next/image";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
export default function Card({ product }) {
  return (
    <>
      

   <div className="flex flex-col  transition-all duration-300">

     
      <div className="relative h-56 w-full overflow-hidden hover:scale-105 transition-all">
      
       

      
        <Image
          src={product.image[0]}
          alt="product"
          fill
          className="object-cover transition-all duration-300 cursor-pointer rounded-tl-4xl  "
        />
<div className="absolute px-4 py-2  bg-amber-300 rounded-br-4xl rounded-tl-4xl">New</div>
     
        {/* <button className="absolute bottom-0 right-0 
        w-11 h-11 rounded-br-4xl 
        bg-white text-purple-600 
        flex items-center justify-center 
        shadow-md hover:bg-purple-600  hover:cursor-pointer  hover:text-white transition">
          <FiShoppingCart />
        </button> */}



      </div>

     <div className="flex flex-col gap-3">
  {/* rating */}
  

  {/* title */}
  <p className="text-base font-medium text-gray-800 line-clamp-2 mt-2 truncate">
    {product.title.toUpperCase()}
  </p>

  <div className="flex items-center  justify-between">
<span className="flex items-center gap-2">< FaStar className="text-yellow-400" />{product.rating}</span>
<FiEye className="text-xs  text-primary"/>
  </div>
 
  {/* **** */}
  <div className="flex items-center justify-between">
    
     <Link
    href={`/products/${product.id}`}
    className="mt-1 flex justify-center  items-center gap-2 text-white bg-primary text-sm font-medium hover:underline w-full py-2 px-4 rounded-md"
  >
 <span className="">Buy Now - </span> 
  <span>₹{Math.round(product.price * 10)}</span>
  </Link>
{/* 
    <span className="text-sm text-gray-400 line-through">
      ₹{Math.round(product.price*10)/(1-0.70)}
    </span>

    <span className="text-xs text-purple-600 font-medium">
      30% off
    </span> */}
  </div>

  {/* link */}
 
</div>
      

     
      
    
       
      </div>
  




    </>
  );
}
