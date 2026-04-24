"use client"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";



export default function Search_Sort(){
    return (<>
    <div className="flex justify-between items-center">
                {/*input  */}
    
                <div className="w-1/2  md:w-1/3 relative mt-4">
                  {/*  */}
                  <input
                    type="search"
                    className=" w-full py-1  md:py-2 border-2 border-gray-400  rounded-xl focus:outline-none text-xl text-slate-800 pl-2  hover:bg-slate-100 transition-all duration-300 relative"
                    placeholder="Search here..."
                  />
                  {/*  */}
                  <CiSearch className="absolute top-1/2 right-3 -translate-y-1/2 md:right-2 text-gray-400 text-xl  md:text-3xl " />
                </div>
    
                {/* total length of available products */}
    
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
    </>)
}