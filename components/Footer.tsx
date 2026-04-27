export default function Footer(){
    return(<>
<section className="mt-20 bg-gradient-to-r from-slate-900 via-purple-900/80 to-slate-900">

  {/*  */}
  

  {/*  */}
  <div className="px-4 py-12">
    <div className="max-w-7xl mx-auto 
    bg-white/10 backdrop-blur-xl 
    border border-white/20 
    rounded-3xl shadow-2xl p-8">

      {/* *** */}
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* BRAND */}
        <div className="flex flex-col gap-3 max-w-sm">
          <h2 className="text-3xl font-bold text-white tracking-wide">
            E-commerce
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed">
            Discover premium products with seamless shopping experience.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-2">
            {["F", "T", "I"].map((val, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center 
                rounded-xl bg-white/20 text-white 
                hover:bg-purple-600 transition cursor-pointer"
              >
                {val}
              </div>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold mb-2">Company</p>
            <a className="text-gray-300 hover:text-white transition">Home</a>
            <a className="text-gray-300 hover:text-white transition">About</a>
            <a className="text-gray-300 hover:text-white transition">Services</a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold mb-2">Support</p>
            <a className="text-gray-300 hover:text-white transition">Contact</a>
            <a className="text-gray-300 hover:text-white transition">Help</a>
            <a className="text-gray-300 hover:text-white transition">Privacy</a>
          </div>
        </div>
      </div>

      {/* **** */}
      <div className="my-6 border-t border-white/20" />

      {/* ***/}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-300">
        <p>© 2026 E-commerce. All rights reserved.</p>
        <p className="text-xs opacity-70">
          Designed with modern UI
        </p>
      </div>

    </div>
  </div>



  
</section>

    </>)
}