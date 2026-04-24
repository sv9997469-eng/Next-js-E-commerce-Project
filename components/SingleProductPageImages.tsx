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
      <div className="col-span-4 flex flex-col justify-center">
        {data.map((value, i) => (
          <span key={i + 1}>
            <Image
              src={value}
              alt="single_product"
              width={100}
              height={200}
              className="object-cover rounded mb-3 cursor-pointer shadow-md shadow-black/50 h-26 w-200"
              onClick={() => {
               selectImg(value);
              }}
            />
          </span>
        ))}
      </div>
      {/*  */}
      <div className="col-span-6 flex items-center">
        <div className="relative h-50 w-70 rounded">
          <Image
            src={defaultSrc}
            alt="single_product"
            fill
            className="object-contain rounded"
          />
        </div>
      </div>
    </>
  );
}
