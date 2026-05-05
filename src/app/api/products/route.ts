import { NextRequest, NextResponse } from "next/server";
import products from "../../../../public/products.json";
export function GET(req:NextRequest){
const res= req.nextUrl.searchParams;
let filtered=[...products];

 const category = res.get("category") || "All";
  const searchText = res.get("search") || "";
  const sorting = res.get("sorting")|| ""
  const page = Number(res.get("page")) || 1;
  const limit = Number(res.get("limit")) || 10;






if (category !== "All") {
    filtered = filtered.filter((val) => val.category === category);
  }


  if (searchText) {
    filtered = filtered.filter((val) =>
      val.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }


  if (sorting === "Low to High") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sorting === "High to Low") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sorting === "A-Z") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sorting === "Z-A") {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  }

  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);

  if (page > totalPages && totalPages > 0) {
    return NextResponse.json(
      { message: "Page not found", code: "PAGE_ERROR" },
      { status: 404 }
    );
  }

  const startIndex = (page - 1) * limit;
  const paginated = filtered.slice(startIndex, startIndex + limit);

  return NextResponse.json({
    products: paginated,
    totalLength: total,
    limit,
  });
}