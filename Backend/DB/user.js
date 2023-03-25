const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({                              
    name:String,
    email:String,
    password:String                                                         
 })

  //Model Creation
  const UserModel=mongoose.model('users',userSchema)

  module.exports=UserModel                      //exported model only because, schema is inside it itseltf.