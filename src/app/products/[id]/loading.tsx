export default function loading() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-10 px-30 mt-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 flex flex-col justify-center py-20">
            {Array.from({ length: 3 }).map((val, i) => (
              <span key={i}>
                <div className="h-20 mb-2 rounded bg-gray-300 animate-pulse" />
              </span>
            ))}
          </div>
          {/* ************ */}

          <div className="col-span-6 grid items-center">
            <div className="bg-gray-300 h-30 animate-pulse" />
          </div>
        </div>

        {/* *************** */}

        <div className="flex flex-col gap-5 py-15">
          <div className="bg-gray-300  rounded-full h-8 w-35 animate-pulse" />

          {/*  */}

          <div className="bg-gray-300  rounded-lg h-3 w-50 animate-pulse " />
          <div className="bg-gray-300  rounded-lg h-3 w-35 animate-pulse " />
          <div className="bg-gray-300  rounded-lg h-3 w-10 animate-pulse " />

          <div className="bg-gray-300  rounded-lg h-3 w-20 animate-pulse" />
          <div className="bg-gray-300  rounded-lg h-3 w-30 animate-pulse" />
         
          <div className="bg-gray-300  rounded-lg h-3 w-90 animate-pulse" />
          {/*  */}

          <div className="bg-gray-300  rounded-lg h-3 w-20 animate-pulse" />
          <div className="bg-gray-300  rounded-lg h-3 w-30 animate-pulse" />
          <div className="bg-gray-300  rounded-lg h-3 w-50 animate-pulse" />
          {/*  */}
<div className="flex items-center gap-3">

{/* ************************** */}

 <div className="bg-gray-300 rounded-md w-10 h-8 animate-pulse" />
 <span className="rounded bg-gray-300 h-1 w-2 animate-pulse"/>
 
 <div className="bg-gray-300 rounded w-10 h-8 animate-pulse" />


{/* *********** */}

</div>


<div className="flex gap-5 items-center py-2">
    {/*  */}
    <div className="bg-gray-300 animate-pulse cursor-pointer  px-4 py-2 w-40 h-10" />
{/*  */}
    <div className="bg-gray-300 animate-pulse cursor-pointer  px-4 py-2 w-30 h-10" />
    {/*  */}
   
   {/*  */}
</div>


          {/*  */}

          {/* ************** */}

          {/* cart */}

          {/*  */}
        </div>
      </div>
    </>
  );
}
