import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
export default function AddtoCart({singleProduct}){
return (<>


<div className="flex gap-5 items-center">
    {/*  */}
    <Link href={"/cart"} className="bg-primary px-4 py-2 text-white font-medium flex items-center justify-center gap-2  cursor-pointer rounded text-xl">Add to Cart < CiShoppingCart className="font-bold text-2xl"/></Link>
{/*  */}
    <button className="ring-2 ring-slate-600 px-4 py-2 font-medium text-slate-600 cursor-pointer rounded">Buy Now</button>
    {/*  */}
   <CiHeart className="text-4xl text-slate-600 cursor-pointer"/>
   {/*  */}
</div>

</>)
}