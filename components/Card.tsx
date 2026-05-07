import Image from "next/image";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
export default function Card({ product }) {
  return (
    <>
      <div className="relative h-56 w-full overflow-hidden hover:scale-105 transition-all">
        <Link href={`/products/${product.id}`} className="">
          <Image
            src={product.image[0]}
            alt="img"
            fill
            className="object-cover transition-all duration-300 cursor-pointer rounded-lg  "
          />
        </Link>

        <div className="absolute top-4 left-4 bg-white/80  px-6 py-1 lg:px-2 lg:py-1  rounded-lg"> <span className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            {product.rating}
          </span></div>


        <div className="absolute top-4 right-4 bg-white/80  px-6 py-1 rounded-lg"> <span>₹{Math.round(product.price * 10)}</span></div>
      </div>





      <div className="flex flex-col gap-3">
        {/* rating */}

        {/* title */}
        <p className="text-base font-medium text-gray-800 line-clamp-2 mt-2 truncate">
          {product.title.toUpperCase()}
        </p>

       

        {/* **** */}
        <div className="flex items-center justify-between">
          <Link
            href={`/products/${product.id}`}
            className="mt-1 flex justify-center  items-center gap-2 text-white bg-primary text-sm font-medium hover:underline w-full py-2 px-4 rounded-md"
          >
            <span className="">Buy Now </span>
           
          </Link>
        </div>

        {/* link */}
      </div>
    </>
  );
}
