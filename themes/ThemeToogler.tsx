"use client";
import { useTheme } from "next-themes";

export default function ThemeToggler(){

const {theme,setTheme}=useTheme();


    return(<>
<button className="hidden md:block px-4 py-2 bg-gray-400 rounded cursor-pointer text-white font-medium"  onClick={()=>setTheme(theme==="light"?"dark":"light")}>{theme==="light"? "dark":"light"}</button>

    </>)
}