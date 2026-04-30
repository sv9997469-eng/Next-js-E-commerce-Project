"use client";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
// import ThemeToggler from "../themes/ThemeToogler";
import { useState } from "react";
import { useCartContext } from "./cartcontext/CartProvider";
import { CiShoppingCart } from "react-icons/ci";
import logo from "./logo.png"
import Image from "next/image";

export const limit = 10;
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCartContext();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 
 h-[70px]">

        <div className="mx-auto max-w-7xl  flex items-center justify-between px-2 md:px-4 py-2 bg-white/20 backdrop-blur-2xl ">
          <Link
            href={""}
            className="text-xl font-bold tracking-wide text-purple-600 md:text-2xl"
          >
            
           <Image src={logo} width={30} height={30} alt="logo_img" />

    
         {/* <img src={"./logo.svg"} /> */}
   
          </Link>

          {/* links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href={"/"}
              className="text-base font-medium md:text-md text-primary hover:text-indigo-400  transition hover:underline decoration-2 decoration-primary underline-offset-4"
            >
              Home
            </Link>
            {/*  */}
            <Link
              href={`/aboutus`}
              className="text-base font-medium md:text-md text-primary hover:text-indigo-400  transition hover:underline decoration-2 decoration-primary underline-offset-4"
            >
              About us
            </Link>
            <Link
              href={`/products?page=1&limit=10`}
              className="text-base font-medium md:text-md text-primary hover:text-indigo-400  transition hover:underline decoration-2 decoration-primary underline-offset-4"
            >
              Services
            </Link>



            <Link
              href={`/products?page=1&limit=10`}
              className="text-base font-medium md:text-md text-primary hover:text-indigo-400  transition hover:underline decoration-2 decoration-primary underline-offset-4"
            >
              Products
            </Link>
           
          </div>

          {/* action */}
          <div className="flex items-center  gap-6">
            <div className="relative">

                <Link href={"/cart"}>
              <CiShoppingCart className="text-3xl text-primary" />
               </Link>

              <span className="absolute bottom-4 left-6  w-5 h-5 rounded-full text-white font-medium bg-primary  flex justify-center items-center text-sm py-2 px-2">
                {cartItems.length}
              </span>
             
</div>

            <button className="hidden md:block px-4 py-2 bg-secondary text-gray-800 font-medium  text-md  rounded-md">
              Sign Up
            </button>

            <button
              className="px-4 py-2 md:hidden"
              onClick={() => setOpen(true)}
            >
              <IoIosMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>
      {/* side bar small screen */}

      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-gray-100/90 text-text p-5 transform  transition-transform duration-400 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"} `}
      >
        {/*  */}
        <button onClick={() => setOpen(false)}>
          {" "}
          <MdOutlineCancelPresentation className="text-2xl mb-6" />
        </button>
        {/*  link*/}
        <div className="flex flex-col gap-4 items-center">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            className=""
            href={`/products?page=1&limit=${limit}`}
            onClick={() => setOpen(false)}
          >
            Products
          </Link>
          <Link className="" href={"/cart"} onClick={() => setOpen(false)}>
            Cart
          </Link>
        </div>
      </div>
    </>
  );
}
