"use client"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

// import DropdownMenuRadioGroupDemo from "./Sorting";
import useFilterHook from "./utils/CustomeHookforFilters";
export default function SearchAndSorting(){

const {applyFilter,selectedSortingOrder}=useFilterHook()

    return (<>
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4  rounded-xl px-4">

  {/* SEARCH */}
  <div className="relative w-full md:w-2/1 bg-linear-to-r from-primary to-gray-400 p-[2px] rounded-xl animate-pulse">
    <input
      type="search"
      placeholder="Search here..."
      className="w-full pl-10 pr-2   rounded-xl 
      text-sm  text-slate-800 focus:outline-none py-3 bg-white
      "
    />

    <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2  text-xl font-bold text-purple-600" />
  </div>

  {/* *******/}
  <div className="flex items-center gap-4 justify-between md:justify-end w-full md:w-auto">

    {/*  */}
    <button className="px-4 py-3 rounded-xl bg-white/50 backdrop-blur-md border border-gray-200 shadow-sm hover:bg-purple-100 transition cursor-pointer">
      <CiHeart className="text-xl text-gray-600 hover:text-purple-600" />
    </button>

    {/* **** */}
    <div className="relative">
      <select
        className="appearance-none px-4 py-3 pr-10 rounded-xl 
        bg-white/50 backdrop-blur-md 
        border border-gray-200 
        text-sm text-gray-700 font-medium
        focus:outline-none focus:ring-2 focus:ring-purple-400
        shadow-sm cursor-pointer hover:bg-purple-100"
     >
     
        <option value="A-Z">A - Z</option>
        <option value="Z-A">Z - A</option>
      
      </select>

      {/* custom arrow */}
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
    
      </span>
    </div>

  </div>
</div>
    </>)
}