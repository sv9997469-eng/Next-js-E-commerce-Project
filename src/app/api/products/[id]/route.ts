import { NextRequest, NextResponse } from "next/server";
import products from "../../../../../public/products.json";


export async  function GET(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id}= await params;

     if(!id){
     return NextResponse.json({message:"Id is required"},{status:400})
     }

    const singleProduct= products.find((val)=>val.id===Number(id));

    if(!singleProduct){
        return NextResponse.json({message:"Product not found"},{status:404})
    }


    return NextResponse.json({data:singleProduct})

}