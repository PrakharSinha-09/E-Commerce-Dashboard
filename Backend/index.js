const express=require('express')
const cors=require('cors')
require('./DB/config')                         
const User=require('./DB/user')    
const Product=require('./DB/product')


const Jwt=require('jsonwebtoken')
const secretKey='Prakhar09'

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
        delete result.password                                                  //we will never want to send the password onto the server, so before sending it anywhere, we must delete it
        Jwt.sign({result},secretKey,{expiresIn:"2h"},(err,token)=>{
            if(err)
            {
                res.send({"result":"No Such Account Found!"})
            }
            res.send({result,auth:token})
        })
    }
})

app.post('/signin',async(req,res)=>{
    if(req.body.email && req.body.password)
    {
        let user=await User.findOne(req.body).select("-password")               //we will not be sending password right, so this is the way    
        if(user)
        {   
            Jwt.sign({user},secretKey,{expiresIn:"2h"},(err,token)=>{
                if(err)
                {
                    res.send({"result":"No Such Account Found!"})
                }
                res.send({user,auth:token})
            })
            // res.send(user)
        }
        else{
            res.send({"result":"No Such Account Found!"})
        }
    }
    else{
        res.send({"result":"No Such Account Found!"})
    }
})

//add product api
app.post('/addproduct',verifyToken,async(req,res)=>{
    let data=new Product(req.body)
    let result=await data.save()
    res.send(result)
})

//getting product-list api
app.get('/products-list',verifyToken,async(req,res)=>{
    let products=await Product.find()
    if(products.length>0)
    {
        res.send(products)
    }
    else{
        res.send({result:"No Products Found"})
    }
})

//delete product api
app.delete('/product/:_id',verifyToken,async(req,res)=>{
    let data=await Product.deleteOne(req.params)  
    console.log(data) 
    res.send(data)

})

//update product api
app.put('/edit/:_id',verifyToken,async(req,res)=>{
    let data=await Product.updateOne(
        req.params,{$set:req.body}                   //first argument means on what basis we want to update the product, we are doing on the basis of id, thus passes req.params
    )
    res.send(data)
})

//getting single product details obviously by their id
app.get('/getdata/:id',verifyToken,async(req,res)=>{
    let product=await Product.find({_id:req.params.id})
    // const obj=await JSON.parse(product)
    res.send(product) 
    console.log(product[0].name) 
    // res.send(product.name.toString())
    // res.send((JSON.parse(product)).name)
}) 

//search api
app.get('/search/:key',verifyToken,async(req,res)=>{
    let result=await Product.find({ 
        "$or":[                                          //inside an object, when we want to search on the basis of more than 2 fiel then we use $or
            {name : {$regex: req.params.key}},           //searching on the basis of name,brand  & category
            {brand: {$regex: req.params.key}},
            {category: {$regex: req.params.key}} 
        ]
    })
    res.send(result)
})

//profile api
app.get('/user-profile/:id',async(req,res)=>{
    let result=await User.find({_id:req.params.id}).select("-password")  
    res.send(result)
})

function verifyToken(req,res,next){
    let authToken=req.headers['authorization']
    if(authToken)
    {
        authToken=authToken.split(' ')[1]
        console.log(authToken)
        Jwt.verify(authToken,secretKey,(err,valid)=>{
            if(err)
            {
                res.status(401).send({"result":"Token is Invalid!"})
            }
            else{
                next()
            }
        })
    }
    else{
        res.status(403).send({"result":"Token Not Found"})
    }
}

app.listen(5000)

