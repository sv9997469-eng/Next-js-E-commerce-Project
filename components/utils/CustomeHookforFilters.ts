
"use client";

import { usePathname, useSearchParams,useRouter } from "next/navigation";

export default  function useFilterHook(){
const  router = useRouter();
const pathname=usePathname();
const params= useSearchParams();
// ****************************************//
const selectedCategory =params.get("category") || "All";
 const selectedSortingOrder=params.get("sorting") || "";
const searchedtext=params.get("search")|| "";

// *******************************************//
function applyFilter(key:string,value:string){

const current = params.get(key) || "";
if (current === value) return;

const query =new URLSearchParams(params.toString());

    if (!value || value === "All") {
    query.delete(key);
  } else {
    query.set(key, value);
  }
  

query.set("page","1");
if(!query.get("limit")){
    query.set("limit","10")
}


    router.replace(`${pathname}?${query.toString()}`)
}

function removeFilter() {
    router.push("/products");
  }


return {applyFilter,selectedCategory,selectedSortingOrder ,removeFilter,searchedtext}
}
