import { FaArrowLeft } from "react-icons/fa";
import { IoDiscOutline } from "react-icons/io5";
import Link from "next/link";

import AddtoCart from "../../../../components/AddtoCart";
import { Rating } from "../../../../components/Rating";
import SingleProductPageImages from "../../../../components/SingleProductPageImages";

export default async function SingleProduct({ params }) {
  const { id } = await params;
  await new Promise((res)=>setTimeout(res,5000))
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const result = await res.json();
  const { data } = result;

  console.log(data, "data");
  return (
    <>
<section className="py-10">
        
     
<div className="max-w-6xl mx-auto mt-12 px-6">
      <div className="grid lg:grid-cols-2 gap-10 px-30 mt-5 bg-transparent    rounded-4xl  py-4 items-start  z-40">
        <div className="grid grid-cols-12 gap-4 py-2 border border-gray-300 rounded-md   px-4">
          
         {data?.image && <SingleProductPageImages data={data?.image} />}
          {/* img column */}
          
        </div>

        {/* *************** */}

        <div className="flex flex-col gap-2 py-1">
          <div className="text-sm text-gray-600 border border-gray-300 px-4 py-1 rounded-full w-fit">
            {data.category}
          </div>
          {/*  */}

          <p className="text-xl font-semibold text-gray-800 mt-2">{data.title}</p>

          <Rating rating={data.rating} />

          <p className="text-2xl font-bold text-purple-600 mt-3">Rs.{data.price * 10}</p>
          {/*  */}

          <dl>
            <dt className="text-slate-700 font-medium text-md">Description:</dt>
         
      
            <dd className="text-sm  text-gray-500 leading-relaxed mt-1">
              {data.description}
            </dd>
            <div className="my-4 border-t border-gray-200"></div>
          </dl>
          {/*  */}

          {/*  */}
          
          {/* ************** */}

          {/* cart */}
          <AddtoCart singleProduct={data} />
          {/*  */}
        </div>
      </div>
</div>

</section>
    </>
  );
}
