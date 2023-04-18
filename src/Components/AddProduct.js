import React from 'react'
import '../Styles/addProduct.css'
import { useState } from 'react'
const AddProduct = () => {

  const[name,setName]=useState("")
  const[price,setPrice]=useState("")
  const[brand,setBrand]=useState("")
  const[category,setCategory]=useState("")

  const[error,setError]=useState(false)

  let collectData=async ()=>{

    if(!name || !price || !category || !brand)
    {
      setError(true)
      return false
    }
    const userID=JSON.parse(localStorage.getItem('user'))._id
    // console.log(userId)
    let result=await fetch('http://localhost:5000/addproduct',{
      method:'post',
      body:JSON.stringify({name,price,brand,category,userID}),                   //remember one thing that names must be same as you have declared in schema..previously i was writing userId, but in  schema..it is written userID, so remember this thing
      headers:{
        'Content-Type':'application/json',
        'authorization':`bearer ${JSON.parse(localStorage.getItem('token'))}`          
        
      }
    })

    result=await result.json() 
  }
  return (

    
    <div className='product'>
      <h1>Add Product</h1>

      <div className="paren">

      <div className="product-details">

      <input type="text" className='prodi no-outline' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Product Name'/>

      { error && !name && <div className='valid'>
        <p className='valid'>Enter Valid Name</p>
      </div> }

      <br />
      <input type="text" className='prodi no-outline' value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter Product Price'/>
      { error && !price && <div className='valid'>
        <p className='valid'>Enter Valid Price</p>
      </div> }

      <br />
      <input type="text" className='prodi no-outline' value={brand} onChange={(e)=>{setBrand(e.target.value)}} placeholder='Enter Product Brand'/>
      { error && !brand && <div className='valid'>
        <p className='valid'>Enter Valid Brand</p>
      </div> }

      <br />
      <input type="text" className='prodi no-outline' value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder='Enter Product Category'/>
      { error && !category && <div className='valid'>
        <p className='valid'>Enter Valid Category</p>
      </div> }

      <br />
      
      </div>
      </div>

      <div className="btn-div">
        <button className='btn' onClick={collectData}>Add Product</button>

      </div>


    </div>
  )
}

export default AddProduct