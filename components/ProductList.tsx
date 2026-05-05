import Pagination from "./Pagination";
import Card from "./Card";
import { notFound } from "next/navigation";

export default async function ProductPageContent({url}){

  const res = await fetch(url);

if(!res.ok){
  if(res.status===404){
    notFound()
  }
throw new Error("Failed to fetch product")

}



  const result = await res.json();
  const data = result.products;
  const totalProducts = result.totalLength;
  const limit = result.limit;
  // console.log(arr)
  // console.log(data);

    return(<>
    
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {data.map((val) => (
                <Card key={val.id} product={val} />
              ))}
              
            </div>

              <Pagination totalProducts={totalProducts} limit={limit} />
    </>)
}