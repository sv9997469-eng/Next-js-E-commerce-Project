import { FaArrowLeft } from "react-icons/fa";
import { IoDiscOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import AddtoCart from "../../../../components/AddtoCart";
import { Rating } from "../../../../components/Rating";

export default async function SingleProduct({params}){
const {id} = await params;
const res= await fetch(`http://localhost:3000/api/products/${id}`);
const result=await res.json();
const {data}=result;
console.log(id)

    

console.log(data,"data")
    return (<>

<div className="py-2 px-10 flex gap-4 items-center mt-4">
   
<span className="text-slate-500 font-medium flex items-center gap-2"> <Link href
={"/products"}><FaArrowLeft className="cursor-pointer hover:-translate-x-4 transition-all duration-300 hover:text-gray-200"/></Link> Home</span> <span className="text-slate-600 font-medium flex items-center gap-1"><IoDiscOutline/>  Product details</span>

</div>



  <div className="grid lg:grid-cols-2 gap-10 px-30 mt-10">
    <div className="relative flex justify-center">
    <Image src={data.image} alt="single_product" width={400} height={200} className="object-contain rounded"/>

    </div>
    <div className="flex flex-col gap-3">
    <div className="text-lg text-slate-800 font-medium ring-2 ring-slate-200 w-30 rounded-full flex items-center justify-center tracking-wide">{data.category}</div>
{/*  */}

   <p className="text-2xl font-bold">{data.title}</p>


   <Rating rating={data.rating}/>


   <p className="text-xl font-medium">Rs.{data.price*10}</p>
 {/*  */}

   <dl>
    <dt className="text-slate-700 font-medium text-lg">Description:</dt>
 <dd className="text-base font-medium text-slate-500">
{data.description}
 </dd>

   </dl>
{/*  */}
<p className="text-lg font-medium">Availibility: <span className="text-base">{data.stock}</span> </p>
{/*  */}
<p className="text-base font-medium">Quantity:</p>
{/* ************** */}
 <div className="flex items-center gap-3">
 <button className="border-2 border-gray-300 w-10 cursor-pointer">-</button>1<button className="border-2 border-gray-300 w-10 cursor-pointer">+</button>
</div>
{/* *********** */}
<p className="text-base text-slate-600 font-medium">Hurry up, few items are left!!</p>
{/* cart */}
<AddtoCart singleProduct={data}/>
{/*  */}
    </div>
  </div>
  
    </>)
}