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
      <section className="mt-10 flex h-[calc(100vh-70px)] overflow-hidden gap-2">
        <Filters />
        {/* *******2nd col************ */}
        <div className="px-4 flex-1 py-8 overflow-y-auto">
          {/* first row */}
          {/* search and sort */}
           <Search_Sort/>


          {/*  */}
          <Suspense fallback={<ProductCardSkelton />}>
            <ProductPageContent url={url} />
          </Suspense>
        </div>

        {/* ***************************** */}
      </section>
    </>
  );
}
