import { NextResponse } from "next/server";
import {attached} from '../../Model/db'
import mongoose from "mongoose";
import {Register} from '../../Model/schema'

export async function GET (){

    
        try {
        
            await mongoose.connect(attached);
            const data = await Register.find();
            const collectionName = Register.collection.name;
            console.log("Collection Name:", collectionName);
    
            return NextResponse.json({
                result: data,
                collectionName: collectionName,
                Name: "Abhishek"
            });
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
    
            return NextResponse.json({
                result: false,
                error: "Failed to connect to MongoDB"
            });
        
        
    } 
    return NextResponse.json({result:true})

}
export async function POST(req) {
    try {
        console.log("Request Body:", req.body); // Log the request body to check its contents

        const { name, email, mobile } = await req.body;

        const newUser = new Register({
            name,
            email,
            mobile
        });

        const result = await newUser.save();

        return NextResponse.json({
            success: true,
            message: 'Data inserted successfully',
            data: result
        });
    } catch (error) {
        console.error("Error inserting data into MongoDB:", error);
        
        return NextResponse.json({
            success: false,
            error: "Failed to insert data into MongoDB"
        });
    }
}
