const express=require('express')
const cors=require('cors')
require('./DB/config')                         
const User=require('./DB/user')    

const app=express()
app.use(express.json())
app.use(cors())

app.post('/signup',async(req,res)=>{
    let data=new User(req.body)                                        //we know to insert data(in mongoose), we create instance 
    let result=await data.save()                                          //and then save it to DB 
    res.send(result)
})

app.listen(5000)

