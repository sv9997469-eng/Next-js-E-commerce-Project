export default function Footer(){
    return(<>
    <section className="py-4 mt-8 bg-gray-800/50">
  <div className="max-w-7xl mx-auto mt-auto py-4">
    {/*  */}
    <div className="flex flex-col md:flex-row justify-between">
      {/* text */}
      <div className="flex flex-col gap-2">
        <p className="font-medium text-5xl text-white font-[Lobster]">E-commerce</p>
        <p className="text-white text-lg tracking-wide">
          Lorem ipsum dolor sit amet consectetur elit.
        </p>
      </div>
      {/*  */}
      {/* second div links */}
      <div className="flex gap-4 md:gap-10">
        <a href="#" className="font-medium text-xl text-white">
          Home
        </a>
        <a href="#" className="font-medium text-xl text-white">
        About
        </a>
        <a href="#" className="font-medium text-xl text-white">
          Contact
        </a>
        <a href="#" className="font-medium text-xl text-white">
          Services
        </a>
      </div>
      {/*  */}
    </div>
    {/*  */}
    <hr className="mt-8 text-gray-200" />
    {/* last box */}
    <div className="grid grid-cols-12 gap-3 items-center mt-8">
      <div className="col-span-12 flex justify-start md:col-span-8 md:justify-center lg:justify-end pe-24">
        <p className="text-white font-sans text-sm whitespace-nowrap md:text-lg">
          @2022 Flowbase. Powered by
          <span className="text-red-600 font-sans text-sm md:text-lg ml-4">
            Webflow
          </span>
        </p>
      </div>
      {/*  */}
      
      {/*  */}
    </div>
    {/*  */}
  </div>
</section>

    </>)
}