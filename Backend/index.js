const express=require('express')
const cors=require('cors')
require('./DB/config')                         
const User=require('./DB/user')    

const app=express()
app.use(express.json())
app.use(cors())

app.post('/signup',async(req,res)=>{
    let user=await User.findOne(req.body).select("-name")
    // console.log(userEmail)
    if(user!=null && (req.body.email === user.email)){
        res.send({"result":"Account With Email-ID Already Exists"})
    }
    else{

        let data=new User(req.body)                                             //we know to insert data(in mongoose), we create instance 
        let result=await data.save()                                            //and then save it to DB 
        delete result.password
        res.send(result)
    }
})

app.post('/signin',async(req,res)=>{
    if(req.body.email && req.body.password)
    {
        let user=await User.findOne(req.body).select("-password")               //we will not be sending password right, so this is the way    
        if(user)
        {
            res.send(user)
        }
        else{
            res.send({"result":"No Such Account Found!"})
        }
    }
    else{
        res.send({"result":"No Such Account Found!"})
    }
})

app.listen(5000)

