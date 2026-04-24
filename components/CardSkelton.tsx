export default function ProductCardSkelton(){
    return(<>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
{Array.from({length:8}).map((val,i)=><div className="flex flex-col px-4 gap-2 h-70 shadow-md" key={i}>
        <div className=" bg-gray-300 rounded h-40 animate-pulse"/>
       

        <div className="flex flex-col gap-3 py-2">
          <div className="bg-gray-300 rounde h-4 w-20 animate-pulse"/>
          <div className="bg-gray-300 rounde h-4 animate-pulse w-30"/>
           
          {/* Button */}
          <div
            
            className="px-4 py-2 h-5 bg-gray-300 animate-pulse"
          />
            
          
        </div>

        {/*  */}
      </div>)}
     
       </div>
    </>)
}