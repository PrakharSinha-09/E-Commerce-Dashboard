//here we are going to make the collection for users

const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({                              
    name:String,
    email:String,
    password:String                                                         
 })

  //Model Creation
  const UserModel=mongoose.model('users',userSchema)              //first argument being we know is the name of the collection

  module.exports=UserModel                                       //exported model only because, schema is inside it itseltf.