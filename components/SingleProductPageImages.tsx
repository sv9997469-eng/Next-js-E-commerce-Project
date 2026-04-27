"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SingleProductPageImages({ data }) {
  const [defaultSrc, setDefaultSrc] = useState(data[0]);

  // console.log(data)
  // console.log(index)

  // useEffect(() => {
   
  //   const savedCuurenImg = localStorage.getItem("src");

  //   if (savedCuurenImg) {
     
  //     setDefaultSrc(savedCuurenImg);
  //   } else {
    
  //     setDefaultSrc(data[0]);
  //   }
  // }, []);

function selectImg(value){
 setDefaultSrc(value);
 localStorage.setItem("src",value)

}



  return (
    <>

 <div className="col-span-12 flex items-center rounded-lg">
        <div className="h-90 rounded-lg w-full flex items-center justify-center relative">
          <Image
            src={defaultSrc}
            alt="single_product"
            fill
            className="object-contain rounded-lg"
          />


        </div>
      </div>
{/*  */}

      <div className="col-span-12 flex gap-3 py-3">
        {data.map((value, i) => (
          <span key={i + 1}>
            <Image
              src={value}
              alt="single_product"
              width={80}
              height={80}
              className={`object-cover p-2  rounded-lg mb-3 cursor-pointer border border-gray-200 hover:border-purple-500 transition shadow-sm hover:scale-105 ${value===defaultSrc ? "   border-2 border-purple-500":""}`}
              onClick={() => {
               selectImg(value);
              }}
            />
          </span>
        ))}
      </div>
      
      {/*  */}
     
    </>
  );
}
