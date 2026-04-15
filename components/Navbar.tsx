"use client";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link"
import ThemeToggler from "../themes/ThemeToogler"
import { useState } from "react";

export default function Navbar() {
const [open,setOpen]=useState(false);


    return (<>
        <nav className="w-full bg-bg border-b border-muted text-text">
            <div className="mx-auto max-w-7xl  flex items-center justify-between px-4 py-2 ">

                <Link href={""} className="px-4 text-lg rounded cursor-pointer  font-medium flex justify-center items-center md:text-lg">
                    Logo
                </Link>


                {/* links */}
                <div className="flex items-center gap-6">

                    <Link href={"/"} className="hover:text-primary">
                        Home
                    </Link>
                    {/*  */}
                    <Link href={"/products"} className="hover:text-primary">Products</Link>
                    {/*  */}
                    {/*  */}
                    <Link href={"/cart"} className="hover:text-primary">Cart</Link>
                    {/*  */}


                </div>

{/* action */}
<div className="flex items-center">
<ThemeToggler/>
<button className="px-4 py-2 md:hidden" onClick={()=>setOpen(true)}><IoIosMenu className="text-2xl"/></button>
</div>


            </div>

        </nav>
{/* side bar small screen */}

<div className={`fixed top-0 left-0 h-full w-64 z-50 bg-gray-200 text-text p-5 transform  transition-transform duration-400 ease-in-out ${open ? "translate-x-0":"-translate-x-full"} `}>
    {/*  */}
<button onClick={()=>setOpen(false)}> <MdOutlineCancelPresentation className="text-2xl mb-6"/></button>
{/*  link*/}
<div className="flex flex-col gap-4 items-center">

 <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
<Link className="" href={"/products"} onClick={()=>setOpen(false)}>Products</Link>
<Link className="" href={"/cart"} onClick={()=>setOpen(false)}>Cart</Link>

</div>




</div>


    </>)
}