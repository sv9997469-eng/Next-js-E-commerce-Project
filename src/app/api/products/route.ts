import { NextRequest, NextResponse } from "next/server";
import products from "../../../../public/products.json";
export function GET(req:NextRequest){
const res= req.nextUrl.searchParams;
let filtered=[...products];
const category=res.get("category")|| "All";
// const priceSorting=res.get("price_sorting");
 const sorting =res.get("sorting");
const page =Number(res.get("page")) || 1 ;
const limit = Number(res.get("limit")) || 10 ;

if(category!=="All"){
filtered=filtered.filter((val)=>val.category===category);
}

if(sorting==="Low to High"){
    filtered.sort((a,b)=>a.price-b.price)
}
if(sorting==="High to Low"){
    filtered.sort((a,b)=>b.price-a.price)
}

if(sorting==="A-Z"){
 filtered.sort((a,b)=>a.title.localeCompare(b.title))
}else if(sorting==="Z-A"){
    filtered.sort((a,b)=>b.title.localeCompare(a.title))
}



const startIndex= (page-1)*limit;
const endIndex = startIndex + limit ;
const paginated = filtered.slice(startIndex,endIndex);


    return NextResponse.json({products: paginated,totalLength:filtered.length,limit})
}