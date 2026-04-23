"use client"
import {useCartContext} from "../../../components/cartcontext/CartProvider";
import { RxCross2 } from "react-icons/rx";
import { LiaTrashAlt } from "react-icons/lia";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import cartImg from "../../../components/cartpage.jpg"
export default function Cart(){
    const router= useRouter();
    const {cartItems , removeItems , cartClear , totalPrice,gst,shippingcharges,increaseItems,decreaseItems} =useCartContext();
    
   
      
    return (<>
    <section className="px-20 py-8">
        <hr className="border-gray-200 mt-4"/>
        <div className="flex justify-end  gap-4 items-center mt-4"><FaArrowLeft/><button onClick={()=>router.back()} className="px-4 py-2 rounded bg-primary w-30 text-white font-medium cursor-pointer">Go back</button></div>
 <p className="text-3xl mt-2">YOUR CART</p>


   
<div className="grid lg:grid-cols-12 gap-4 mt-6">

<div className="col-span-8  shadow shadow-black   rounded-lg py-2 px-4">
    {/*  */}
    <div className="flex justify-end items-center px-4">
   
      
      <div className="flex items-center gap-3">

       <button className="cursor-pointer" onClick={cartClear}>< RxCross2 className="text-xl text-red-700"/></button> 

        <span className="text-lg font-medium text-red-700">Clear cart</span>
      </div>


    </div>
{/* ********* */}
<div className="grid grid-cols-3 gap-4  items-center px-4 py-8">
<span className="text-md font-medium">Product</span>
<span className="text-md font-medium">Count</span>
<span className="text-md font-medium">remove</span>
</div>
{/* *** */}
{cartItems.map((val)=><div className="ring-1 ring-gray-200 grid grid-cols-3 gap-4 items-center mb-3 rounded-lg px-2" key={val.id}>
{/* first box img , details */}
<div className="flex gap-4 items-center">
<div className="py-2">
<Image src={val.image[0]} alt="cart_item" width={60} height={80} className="rounded"/>
</div>
{/*  */}
<div className="flex flex-col">
    <p className="text-base font-semibold leading-6">{val.title}</p>
    <p className="text-base font-semibold leading-6">Rs.{val.price*10}</p>
</div>
{/*  */}
{/* **** */}
<div>

</div>
{/*  */}
</div>
{/* quantity */}
<div className="flex gap-2 ">

<button className="w-7 h-7 rounded-full flex  items-center justify-center border cursor-pointer" onClick={()=>decreaseItems(val.id)}>-</button>

<span>{val.qnty}</span>

<button className="w-7 h-7 rounded-full flex items-center justify-center border cursor-pointer" onClick={()=>increaseItems(val.id,val.stock)}>+</button>
</div>
{/*  */}
{/* remove button */}
<div>
<button onClick={()=>removeItems(val.id)} className="cursor-pointer hover:border-1 border-gray-300 p-2">
< LiaTrashAlt className="text-2xl"/>
</button>
</div>
{/*  */}

</div>)}


{/*  */}

</div>
{/*  */}
<div className="col-span-4 flex items-center">
    <div className="bg-gray-50 py-8 px-4 w-full rounded-md space-y-3">
<hr  className="text-gray-300"/>
{/* ********************* */}

<div className="flex justify-between">
<p className="font-bold">SubTotal</p>
<p className="font-medium">Rs.{Math.round(totalPrice)}</p>
</div>
{/* *** */}
<div className="flex justify-between">
<p className="font-bold">Shipping Charges</p>
<p className="font-medium">Rs.{totalPrice >0 ?shippingcharges :0 }</p>
</div>
{/*  */}
<div className="flex justify-between">
<p className="font-bold">gst</p>
<p className="font-medium">Rs.{gst}</p>
</div>
{/*  */}
<div className="flex justify-between">
<p className="font-bold">Total Price</p>
<p className="font-medium">Rs.{totalPrice >0 ?  Math.round(totalPrice + gst + shippingcharges) : "00"}</p>
</div>
<div className="mt-4">
    <Link href={"/checkout"} className="px-4 py-2 bg-primary text-white rounded">Go to checkout</Link>
</div>

{/* ***************** */}
</div>
</div>
{/*  */}
<div className="col-span-8 relative h-[200px] rounded-md">
<Image src={cartImg} alt="cart_img" fill className="object-cover  z-10 rounded-md"/>

{/*  */}
<div className="absolute inset-0 flex flex-col justify-center items-center gap-2 z-200 bg-black/40 rounded-md"><p className="font-bold text-white text-lg">Check our new products</p>
<Link href={"/products"} className="px-4 py-2 text-white border-2 rounded font-bold  shadow shadow-white hover:bg-white/50 transition-all duration-300">Shop now</Link>
</div>
</div>

</div>
{/* *** */}

{/*  */}


{/*  */}
 </section>





    </>)
}