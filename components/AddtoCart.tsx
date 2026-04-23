"use client"

import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
// import Link from "next/link";
import { useCartContext } from "./cartcontext/CartProvider";
export default function AddtoCart({singleProduct}){
const {cartItems, addTocart ,increaseItems,decreaseItems}=useCartContext();
  const item = cartItems.find((val)=>val.id===singleProduct.id)
 const quantity = item?.qnty || 0 ;
return (<>

<p className="text-lg font-medium">Availibility: <span className="text-base">{singleProduct.stock-quantity}</span> </p>

{ quantity<singleProduct.stock ? <p className="text-xl text-secondary font-medium">Hurry up, few items are left!!</p> : <p className="text-xl text-red-800 font-medium">Out of stock !!</p>}


<div className="flex items-center gap-3">

{/* ************************** */}

 <button className="border-2 border-gray-300 w-10 cursor-pointer" onClick={()=>decreaseItems(singleProduct.id)}>-</button>
 {quantity}
 
 <button className="border-2 border-gray-300 w-10 cursor-pointer disabled:bg-gray-100 disabled:cursor-not-allowed" onClick={()=>increaseItems(singleProduct.id , singleProduct.stock)} disabled={quantity>=singleProduct.stock}>+</button>


{/* *********** */}

</div>

<div className="flex gap-5 items-center">
    {/*  */}
    <button  className="bg-purple-700 cursor-pointer  px-4 py-2 text-white font-medium flex items-center justify-center gap-2  rounded text-xl disabled:bg-gray-300 disabled:cursor-not-allowed"  onClick={()=>addTocart(singleProduct)}  disabled={quantity >= singleProduct.stock}>Add to Cart < CiShoppingCart className="font-bold text-2xl"/></button>
{/*  */}
    <button className="ring-2 ring-slate-600 px-4 py-2 font-medium text-slate-600 cursor-pointer rounded">Buy Now</button>
    {/*  */}
   <CiHeart className="text-4xl text-slate-600 cursor-pointer"/>
   {/*  */}
</div>

</>)
}