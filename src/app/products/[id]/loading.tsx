import { Skeleton } from "@/components/ui/skeleton";


export default function loading() {
  return (
    <>
    

 
    <section className="py-10">


      <div className="max-w-6xl mx-auto mt-12 px-6">


        <div className="grid lg:grid-cols-2 gap-10 px-30 mt-5 bg-transparent py-4 items-start">
          
          {/* Left Column: Images */}
          <div className="grid grid-cols-12 gap-4 py-10 border border-gray-300 rounded-md px-4">


            <div className="col-span-12 flex flex-col gap-15 pt-8">
               {/* Main Image  */}
              <Skeleton className="h-60 w-full rounded-lg" />



              {/* three images */}
              <div className="flex gap-3 pt-4">
                <Skeleton className="h-15 w-20 rounded-lg" />
                <Skeleton className="h-15 w-20 rounded-lg" />
                <Skeleton className="h-15 w-20 rounded-lg" />
              </div>
            </div>
          </div>



{/* ***************************************** */}





          {/* Right Column: Details */}
          <div className="flex flex-col gap-4 py-1">
            {/* Category Tag */}
            <Skeleton className="h-8 w-24 rounded-full" />
            
            {/* Title */}
            <Skeleton className="h-10 w-3/4 mt-2" />
            
            {/* Rating */}
            <Skeleton className="h-6 w-32" />
            
            {/* Price */}
            <Skeleton className="h-12 w-40 mt-3" />

            {/* Description */}
            <div className="space-y-2 mt-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            {/* Button */}
            <div className="flex gap-2">
            <Skeleton className="h-8 w-10 rounded-lg mt-6" />
            <Skeleton className="h-8 w-10 rounded-lg mt-6" /></div>

{/* ***************** */}
<div>

</div>

          </div>
        </div>
      </div>
    </section>
  


    </>
  );
}
