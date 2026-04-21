import { NextRequest, NextResponse } from "next/server";
import products from "../../../../public/products.json";
export function GET(req:NextRequest){
const res= req.nextUrl.searchParams;
let filtered=[...products];
const category=res.get("category")|| "All";
const priceSorting=res.get("price_sorting");
 const sorting_title =res.get("sorting_title");


if(category!=="All"){
filtered=filtered.filter((val)=>val.category===category);
}

if(priceSorting==="Low to High"){
    filtered.sort((a,b)=>a.price-b.price)
}
if(priceSorting==="High to Low"){
    filtered.sort((a,b)=>b.price-a.price)
}

if(sorting_title==="A-Z"){
 filtered.sort((a,b)=>a.title.localeCompare(b.title))
}


    return NextResponse.json({products: filtered,totalLength:products.length})
}