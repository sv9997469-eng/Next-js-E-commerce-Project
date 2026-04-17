"use client";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

  const router=useRouter();
  const pathname=usePathname();
  const params=useParams();

// export function applyFilter(key,value){

// const query=new URLSearchParams(params);
// query.set(key,value);

// router.push(`${pathname}?${query.toString()}`)

// }


// export function removeFilter(){
//   router.push(`/products`)
// }