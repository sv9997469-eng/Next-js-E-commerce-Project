import Image from "next/image";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
export default function Card({ product }) {
  return (
    <>
      

   <div className="flex flex-col  transition-all duration-300">

     
      <div className="relative h-56 w-full overflow-hidden">
      
       

      
        <Image
          src={product.image[0]}
          alt="product"
          fill
          className="object-cover transition-all cursor-pointer duration-300 rounded-br-4xl   group-hover:scale-105"
        />

     
        <button className="absolute bottom-0 right-0 
        w-11 h-11 rounded-br-4xl 
        bg-white text-purple-600 
        flex items-center justify-center 
        shadow-md hover:bg-purple-600  hover:cursor-pointer  hover:text-white transition">
          <FiShoppingCart />
        </button>
      </div>

     <div className="flex flex-col gap-1">
  {/* rating */}
  <div className="flex items-center gap-1 text-sm text-gray-600">
    <FaStar className="text-yellow-400" />
    <span>{product.rating}</span>
  </div>

  {/* title */}
  <p className="text-base font-medium text-gray-800 line-clamp-2">
    {product.title}
  </p>

  {/* price */}
  <div className="flex items-center gap-2">
    <p className="text-lg font-semibold text-purple-600">
      ₹{Math.round(product.price * 10)}
    </p>
{/* 
    <span className="text-sm text-gray-400 line-through">
      ₹{Math.round(product.price*10)/(1-0.70)}
    </span>

    <span className="text-xs text-purple-600 font-medium">
      30% off
    </span> */}
  </div>

  {/* link */}
  <Link
    href={`/products/${product.id}`}
    className="mt-1 flex items-center gap-2 text-purple-600 text-sm font-medium hover:underline"
  >
    <FiEye />
    View Details
  </Link>
</div>
      

     
      
    
       
      </div>
  




    </>
  );
}
