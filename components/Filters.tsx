"use client";
// import { applyFilter } from "./utils/applyFilters";
// import { removeFilter } from "./utils/applyFilters";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Filters() {
   const router=useRouter();
    const pathname=usePathname();
    const params=useSearchParams();
console.log(params.size)
   function applyFilter(key,value){

  const query=new URLSearchParams(params);
  query.set(key,value);

  router.push(`${pathname}?${query.toString()}`)

  }

  function removeFilter() {
    router.push("/products");
  }

  return (
    <>
      <div className="hidden w-64 shrink-0 md:block ">
        <div className="shadow-md shadow-black  flex flex-col items-center sticky top-0  max-h-screen overflow-y-auto  py-8">
          {/*  */}

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
                      onChange={(e) => applyFilter("category", e.target.value)}
                    />
                    {val}
                  </span>
                ),
              )}
            </form>
          </section>
          {/*  */}
          <section>
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
                    onChange={(e) => applyFilter("price_sorting", e.target.value)}
                  />
                  {val}
                </span>
              ))}
            </form>
          </section>
          {/*  */}

          <button className="bg-primary px-4 py-2 text-white font-medium text-xl mt-4 cursor-pointer" onClick={removeFilter}>
            Clear Filters
          </button>
        </div>
      </div>
    </>
  );
}
