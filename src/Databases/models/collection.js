const { default: mongoose } = require("mongoose");


const mydetails = new mongoose.Schema ({
 name:String,
 email:String,
 Mobile:String,
//  Password:String
})

export const Product = mongoose.models.Product||mongoose.model("Product",mydetails)
