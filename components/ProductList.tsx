import Pagination from "./Pagination";
import Card from "./Card";
import { notFound } from "next/navigation";

export default async function ProductPageContent({url}){

  const res = await fetch(url);

if(!res.ok){
const errormessage =await res.json();

  if(res.status===404){
    notFound()
  }

return (<>
<p>Error loading products...</p>

<p>{errormessage.message || "something went wrong. please try later!!"}</p>


</>)

}



  const result = await res.json();
  const data = result.products;
  const totalProducts = result.totalLength;
  const limit = result.limit;
  
if(data.length===0){
  return (<> <p className="py-4">No result found</p>
  <p>Try adjusting your search result.</p>
  
  </>)
}


    return(<>
    
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {data.map((val) => (
                <Card key={val.id} product={val} />
              ))}
              
            </div>

              <Pagination totalProducts={totalProducts} limit={limit} />
    </>)
}