import { connectionstr } from "@/Databases/db";
import { Product } from "@/Databases/models/collection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
// mongoose

export async function GET(){
    await mongoose.connect(connectionstr)
    const data = await Product.find()
    return NextResponse.json({
        result:data
    })
}

export async function POST(req){
   await mongoose.connect(connectionstr)
   const payload = await req.json()
   let product= new Product(payload)
   const res=await product.save()
   return NextResponse.json({
    res,
    success:true
   })
}
