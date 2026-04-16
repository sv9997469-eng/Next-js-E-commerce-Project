import Image from "next/image";

import Link from "next/link"
export default function Card({img}){
    return (<>
    
    <div className="bg-white rounded shadow-md flex flex-col gap-4 p-4  overflow-hidden relative">
       <div className="relative h-80">
     <Image src={img} alt="product-img" fill  className="object-cover"/>
</div>
    {/*  */}
<div className="absolute inset-0 bg-black/10    translate-x-0 hover:-translate-x-full transform transition-transform duration-300 ease-in-out cursor-pointer"></div>

   <div className="space-y-4">
     <p className="text-xl font-bold">Denim Jacket</p>
      <p className="text-lg">Rs.450.00</p>
      <Link href={"/products"} className="px-4 py-2 ring-2 ring-primary  cursor-pointer hover:bg-primary">Show now</Link>
    
    </div>

    {/*  */}
    </div>
    </>)
}