//here we are going to make the collection for products

const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    "name":String,
    "price":Number,
    "brand":String,
    "userID":String,
    "category":String
})

//Model Creation
const productModel=mongoose.model('products',productSchema)

module.exports=productModel