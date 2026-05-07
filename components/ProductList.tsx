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
    
<div className="grid grid-cols-12 gap-6 mt-8">
              {data.map((val)=>{
               return  <div key={val.id}   className="col-span-12 md:col-span-6 lg:col-span-4   flex flex-col  transition-all duration-300">
                <Card  product={val} /></div>
})}
              
            </div>

              <Pagination totalProducts={totalProducts} limit={limit} />
    </>)
}