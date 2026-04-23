"use client";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function SingleProductPageImages({data}){

    const [defaultSrc,setDefaultSrc]=useState()
    const [loading,setLoading]=useState(true);
    

// console.log(data)
// console.log(index)



useEffect(()=>{
setLoading(true)
 const savedCuurenImg = localStorage.getItem("currentImg");

if(savedCuurenImg){
    setLoading(false);
    setDefaultSrc(JSON.parse(savedCuurenImg));

}else{
      setLoading(false);
     setDefaultSrc(data[0])
}

},[])



    return(<>
<div className="col-span-4 flex flex-col justify-center">
    
{data.map((val,i)=><span key={i+1}><Image src={val} alt="single_product" width={100} height={200} className="object-cover rounded mb-3 cursor-pointer shadow-md shadow-black/50 h-26 w-200" onClick={()=>{setDefaultSrc(val)}}/></span>)}

    
</div>
{/*  */}
<div className="col-span-6 flex items-center">


    <div className="relative h-50 w-70 rounded">
{loading && <div className="absolute inset-0 mt-6 bg-gray-300 animate-pulse h-33 rounded"/>}

<Image src={defaultSrc} alt="single_product" fill className="object-contain rounded"/>
</div>
</div>

    </>)
}