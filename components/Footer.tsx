export default function Footer() {
  return (
    <>
  
<section style={{backgroundImage:"url('/footerbg.svg')"}} className="bg-cover bg-center min-h-[350px] px-8 mt-4">
  <div className="max-w-7xl mx-auto bg-white/20 backdrop-blur-xl h-full rounded-xl">

<div className="flex items-center justify-between p-6">
   <div className="">
      <h2 className="text-white text-2xl font-bold mb-3">E-Mart</h2>
      <p className="text-sm text-primary">
       Grab best deals at afforable price.
      </p>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-white font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="text-white hover:text-primary">Home</a></li>
        <li><a href="#" className="text-white hover:text-primary">About</a></li>
        <li><a href="#" className="text-white hover:text-primary">Services</a></li>
        <li><a href="#" className="text-white hover:text-primary">Contact</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-white font-semibold mb-3">Resources</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="text-white hover:text-primary">Blog</a></li>
        <li><a href="#" className="text-white hover:text-primary">Help Center</a></li>
        <li><a href="#" className="text-white hover:text-primary">Privacy Policy</a></li>
        <li><a href="#" className="text-white hover:text-primary">Terms</a></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h3 className="text-white font-semibold mb-3">Subscribe</h3>
      <p className="text-sm mb-3 text-primary">Get latest updates and offers.</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 rounded bg-white hover:bg-white/50 focus:bg-white    text-sm outline-none"
      />
      <button className="mt-3 w-full bg-primary text-white py-2 rounded hover:opacity-90 cursor-pointer">
        Subscribe
      </button>
    </div>

  </div>

  
  <div className="border-t border-white mt-10 pt-6 text-center text-sm text-primary">
    © {new Date().getFullYear()} YourBrand. All rights reserved.
  </div>

{/* ********************************** */}
    </div>
</section>




    </>
  );
}
