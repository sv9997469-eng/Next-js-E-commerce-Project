"use client"
import Image from "next/image"
export default function CategoryCard({value}){
    return(<>
    <div className="flex flex-col items-center gap-2 py-2">
        <div className="rounded-full p-3 bg-gray-300">
     <Image src={value.img} width={80} height={80} alt="category_img" className=""/>
     </div>

     <p>{value.text}</p>
    </div>
    </>)
}