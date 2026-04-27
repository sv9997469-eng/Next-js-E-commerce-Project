"use client"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

// import DropdownMenuRadioGroupDemo from "./Sorting";
import useFilterHook from "./utils/CustomeHookforFilters";
export default function SearchAndSorting(){

const {applyFilter,selectedSortingOrder}=useFilterHook()

    return (<>
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">

  {/* SEARCH */}
  <div className="relative w-full md:w-1/3">
    <input
      type="search"
      placeholder="Search products..."
      className="w-full pl-10 pr-4 py-3 rounded-xl 
      bg-white/50 backdrop-blur-md 
      border border-gray-200 
      text-gray-800 text-sm
      focus:outline-none focus:ring-2 focus:ring-purple-400
      shadow-sm transition"
    />

    <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
  </div>

  {/* RIGHT SIDE */}
  <div className="flex items-center gap-4 justify-between md:justify-end w-full md:w-auto">

    {/*  */}
    <button className="p-2 rounded-xl bg-white/50 backdrop-blur-md border border-gray-200 shadow-sm hover:bg-purple-100 transition">
      <CiHeart className="text-xl text-gray-600 hover:text-purple-600" />
    </button>

    {/* **** */}
    <div className="relative">
      <select
        className="appearance-none px-4 py-2 pr-10 rounded-xl 
        bg-white/50 backdrop-blur-md 
        border border-gray-200 
        text-sm text-gray-700 font-medium
        focus:outline-none focus:ring-2 focus:ring-purple-400
        shadow-sm cursor-pointer"
     >
     
        <option value="A-Z">A → Z</option>
        <option value="Z-A">Z → A</option>
      
      </select>

      {/* custom arrow */}
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
        ▼
      </span>
    </div>

  </div>
</div>
    </>)
}