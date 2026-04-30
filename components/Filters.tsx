"use client";

import useFilterHook from "./utils/CustomeHookforFilters";

// import { applyFilter } from "./utils/applyFilters";
// import { removeFilter } from "./utils/applyFilters";

// import { Button } from "@/components/ui/button"
export default function Filters() {
  const { applyFilter, selectedCategory, selectedSortingOrder, removeFilter } =
    useFilterHook();

  // function applyFilter(key: string, value: string) {
  //   const query = new URLSearchParams(params);
  //   if (value === "All") {
  //     query.delete(key);
  //   } else {
  //     query.set(key, value);
  //   }
  //   // page reseting pending //
  //     query.set("page",1)
  //     query.set("limit","10")
  //   router.push(`${pathname}?${query.toString()}`);
  // }

  return (
    <>
      <div className="ms-4 w-64 shrink-0 h-[85dvh] sticky px-3 py-10  rounded-xl bg-linear-to-tr from-primary to-indigo-800">
        <div className="h-full overflow-y-auto p-5  no-scrollbar bg-white/20 backdrop-blur-lg rounded-xl ">
          <section>
            <p className="text-lg font-semibold text-white/80 mb-3">Category</p>

            <div className="flex flex-col gap-2">
              {[
                "All",
                "Electronics",
                "Kitchen",
                "Fashion",
                "jewellery",
                "Games",
              ].map((val, i) => (
                <label
                  key={i}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition
            ${
              selectedCategory === val
                ? "bg-gray-100 text-gray-700 shadow"
                : "text-white/80"
            }`}
                >
                  <span className="text-sm font-medium">{val}</span>

                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
              ${selectedCategory === val ? "border-primary" : "text-white/80"}`}
                  >
                    {selectedCategory === val && (
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                    )}
                  </span>

                  <input
                    type="radio"
                    name="category"
                    value={val}
                    checked={selectedCategory === val}
                    onChange={(e) => applyFilter("category", e.target.value)}
                    className="hidden"
                  />
                </label>
              ))}
            </div>
          </section>

          {/* DIVIDER */}
          <div className="my-6 border-t border-gray-200" />

          {/* PRICE */}
          <section>
            <p className="text-lg font-semibold text-white/80 mb-3">Price</p>

            <div className="flex flex-col gap-2">
              {["Low to High", "High to Low"].map((val, i) => (
                <label
                  key={i}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition
            ${
              selectedSortingOrder === val
                ? "bg-gray-100 text-gray-700 shadow"
                : "text-white/80"
            }`}
                >
                  <span className="text-sm font-medium">{val}</span>

                  {/* custom radio */}
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
              ${
                selectedSortingOrder === val
                  ? "border-purple-600" : "text-white/80"
              }`}
                  >
                    {selectedSortingOrder === val && (
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                    )}
                  </span>

                  <input
                    type="radio"
                    name="price"
                    value={val}
                    checked={selectedSortingOrder === val}
                    className="hidden"
                  />
                </label>
              ))}
            </div>
          </section>

          {/* CLEAR BUTTON */}
          <button
            onClick={removeFilter}
            className="mt-6 w-full py-3 rounded-xl text-white font-medium
      bg-black/80
      hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </>
  );
}
