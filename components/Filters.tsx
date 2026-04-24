"use client";
// import { applyFilter } from "./utils/applyFilters";
// import { removeFilter } from "./utils/applyFilters";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button"
export default function Filters() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const selectedCategory = params.get("category") || "All";
 const selectedSortingOrder =params.get("price_sorting");






  function applyFilter(key: string, value: string) {
    const query = new URLSearchParams(params);
    if (value === "All") {
      query.delete(key);
    } else {
      query.set(key, value);
    }
    // page reseting pending //
      query.set("page",1)
      query.set("limit","10")
    router.push(`${pathname}?${query.toString()}`);
  }

  function removeFilter() {
    router.push("/products");
  }



  
  return (
    <>
      <div className="w-64 shrink-0 h-full sticky top-0 bg-purple-200">
        <div className="h-full overflow-y-auto py-8 flex flex-col items-center">

          <section>
            <p className="text-2xl font-medium mt-4 text-slate-800">CATEGORY</p>
            <form className="flex flex-col gap-2 py-4">
              {["All", "Electronics", "Kitchen", "Fashion", "Games"].map(
                (val, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-xl text-slate-800 font-semibold tracking-wide cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={val}
                      checked={selectedCategory === val}
                      onChange={(e) => applyFilter("category", e.target.value)}
                    />
                    {val}
                  </span>
                ),
              )}
            </form>

 <p className="text-2xl font-medium mt-4 text-slate-800">Price</p>
            <form className="flex flex-col gap-2 py-4">
              {["Low to High", "High to Low"].map((val, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 text-xl text-slate-800 font-semibold tracking-wide cursor-pointer"
                >
                  <input
                    type="radio"
                    value={val}
                    name="price"
                    checked={selectedSortingOrder === val}
                    onChange={(e) =>
                      applyFilter("price_sorting", e.target.value)
                    }
                  />
                  {val}
                </span>
              ))}
            </form>

          </section>
         
           
        

          <Button 
            className="bg-primary px-4 py-6 text-white font-medium text-xl mt-4 cursor-pointer"
            onClick={removeFilter}
          >
            Clear Filters
          </Button>
        </div>
      </div>
    </>
  );
}
