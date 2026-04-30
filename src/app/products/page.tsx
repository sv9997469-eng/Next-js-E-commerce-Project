import Search_Sort from "../../../components/SearchAndSort";
import { Suspense } from "react";
import Filters from "../../../components/Filters";
import ProductCardSkelton from "../../../components/CardSkelton";
import ProductPageContent from "../../../components/ProductList";
import {makeUrLQuery} from "../../../components/utils/applyFilters"




export default async function Products({ searchParams }) {
  const params = (await searchParams) || {};

  const query = makeUrLQuery(params)

  const url = query
    ? `http://localhost:3000/api/products?${query}`
    : `http://localhost:3000/api/products`;

  // only page.tsx, layout.tsx can access url.(searchparams,params)

  // // console.log(arr)
  // // console.log(data);

  return (
    <>
    <section>
      <div className="mt-20 flex h-[calc(100vh-70px)] overflow-hidden gap-4 py-2 max-w-7xl mx-auto">
        
        <Filters />
        {/* *******2nd col************ */}
        <div className="px-4 flex-1 py-2 overflow-y-auto rounded-lg no-scrollbar">
          {/* first row */}
          {/* search and sort */}
           <Search_Sort/>


          {/*  */}
          <Suspense fallback={<ProductCardSkelton />}>
            <ProductPageContent url={url} />
          </Suspense>
        </div>

        {/* ***************************** */}
      </div>
      </section>
    </>
  );
}
