import Link from "next/link";
import Card from "../../../components/Card";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import cardImg from "../../../components/shirt-png-23759_11zon.png";
import Image from "next/image";
import Filters from "../../../components/Filters";
import Pagination from "../../../components/Pagination";


export default async function Products({searchParams}) {
const params= (await searchParams)|| {};



const query = new URLSearchParams(params).toString()

const url=query ? `http://localhost:3000/api/products?${query}`:`http://localhost:3000/api/products`;

  const res = await fetch(url);

  const result = await res.json();
  const data = result.products;
  // console.log(arr)
  console.log(data);

  return (
    <>
      <section className="mt-4 flex-1 overflow-hidden">
        <div className="flex gap-4 overflow-y-auto">
          <Filters/>
          {/* *******2nd col************ */}
          <div className="bg-purple shadow-md shadow-black px-4 flex-1 py-8 overflow-y-auto">
            {/* first row */}
            <div className="flex justify-between items-center">
              {/*input  */}

              <div className="w-1/2  md:w-1/3 relative mt-4">
                {/*  */}
                <input
                  type="search"
                  className=" w-full py-1  md:py-2 border-2 border-gray-400  rounded focus:outline-none text-xl text-slate-800 pl-2 relative hover:bg-slate-200 transition-all duration-300"
                  placeholder="Search here..."
                />
                {/*  */}
                <CiSearch className="absolute top-2 right-2 md:right-0 text-slate-300 text-2xl  md:text-4xl" />
              </div>

{/* total length of available products */}
   <p>Total Products : {data.length}</p>

              {/* sort */}
              <div className="flex items-center gap-4 py-4">
                <CiHeart className="text-3xl" />

                <form>
                  <select className="text-slate-800 text-2xl font-semibold focus:outline-none">
                    <option>A-Z</option>
                    <option>Z-A</option>
                  </select>
                </form>
              </div>

              {/*  */}
            </div>
            {/* 2nd row */}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {data.map((val) => (
                <Card key={val.id} product={val} />
              ))}
            </div>

{/* 3rd row */}

    <Pagination/>


          </div>
        </div>
        {/* ***************************** */}
      </section>
    </>
  );
}
