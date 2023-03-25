const express=require('express')
require('./DB/config')                         
require('./DB/user')    

const app=express()
app.use(express.json())

app.post('/signup',async(req,res)=>{
    res.send(req.body)
})

app.listen(5000)

