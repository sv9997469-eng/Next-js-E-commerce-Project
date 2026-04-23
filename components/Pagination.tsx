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
   
<div className="flex items-center gap-3 mt-8 justify-end">

<button className={`px-4 py-2 bg-gray-500 text-white font-bold rounded flex items-center gap-3 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-400 transition-all duration-300`} onClick={()=>applyPagination(page-1)}disabled={page===1}><FaArrowLeft/> Previous</button>

{/* ************************* */}
{Array.from({length:totalpages},(_,i)=>i+1).map((val)=><button key={val} className={`px-4 py-2 font-medium cursor-pointer rounded-full hover:bg-primary hover:text-white transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed  ${page===val ? "bg-primary text-white ":"border  border-primary"}`} onClick={()=>applyPagination(val)}>{val}</button>)}


{/* **** */}
<button className="px-4 py-2 bg-gray-500 text-white font-bold rounded flex items-center gap-3 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-400 transition-all duration-300" onClick={()=>applyPagination(page+1)} disabled={page===totalpages}>Next <FaArrowRight /></button>
</div>
    </>)
}