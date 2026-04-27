"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
export default function Pagination({totalProducts,limit}){
const router =useRouter();
const params= useSearchParams();
const pathname=usePathname();
const page =Number(params.get("page"))||1;

const totalpages=Math.ceil(totalProducts/limit);

// ***************************//
function applyPagination(p){
const query= new URLSearchParams(params.toString());
query.set("page",p);

router.push(`${pathname}?${query.toString()}`)

}

console.log(totalpages);
    return(<>
   
<div className="flex items-center justify-end gap-2 mt-10">

  {/* PREVIOUS */}
  <button
    onClick={() => applyPagination(page - 1)}
    disabled={page === 1}
    className="flex items-center gap-2 px-4 py-2 rounded-full 
     border border-gray-200/60 
    text-gray-700 text-sm font-medium cursor-pointer
    hover:bg-purple-600 hover:text-white 
    disabled:opacity-40 disabled:cursor-not-allowed
    transition-all duration-300"
  >
    <FaArrowLeft className="text-sm" />
    Prev
  </button>

  {/* PAGE NUMBERS */}
  <div className="flex items-center gap-2">
    {Array.from({ length: totalpages }, (_, i) => i + 1).map((val) => (
      <button
        key={val}
        onClick={() => applyPagination(val)}
        className={`w-10 h-10 flex items-center justify-center 
        rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
        ${
          page === val
            ? "bg-purple-600 text-white shadow-md"
            : " border border-gray-200/60 text-gray-700 hover:bg-purple-200"
        }`}
      >
        {val}
      </button>
    ))}
  </div>

  {/* NEXT */}
  <button
    onClick={() => applyPagination(page + 1)}
    disabled={page === totalpages}
    className="flex items-center gap-2 px-4 py-2 rounded-full 
     border border-gray-200/60 
    text-gray-700 text-sm font-medium
    hover:bg-purple-600 hover:text-white 
    disabled:opacity-40 disabled:cursor-not-allowed
    transition-all duration-300 cursor-pointer"
  >
    Next
    <FaArrowRight className="text-sm" />
  </button>
</div>
    </>)
}