import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateProduct = () => {
  const[name,setName]=useState("")
  const[price,setPrice]=useState("")
  const[brand,setBrand]=useState("")
  const[category,setCategory]=useState("")
  const params=useParams();

  useEffect(()=>{
    getSingle();
  },[])
  
  const getSingle=async ()=>{
    let data=await fetch(`http://localhost:5000/getdata/${params.id}`)
    data=await data.json()
    setName(data[0].name)
    setPrice(data[0].price)
    setBrand(data[0].brand)
    setCategory(data[0].category)
    
  }

  const updateData=async()=>{
    console.log(name,price,category,brand)
  }



  return (

    
    <div className='product'>
      <h1>Update Product</h1>

      <div className="paren">

      <div className="product-details">

      <input type="text" className='prodi no-outline' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Product Name'/>

      <br />
      <input type="text" className='prodi no-outline' value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter Product Price'/>
      

      <br />
      <input type="text" className='prodi no-outline' value={brand} onChange={(e)=>{setBrand(e.target.value)}} placeholder='Enter Product Brand'/>
      

      <br />
      <input type="text" className='prodi no-outline' value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder='Enter Product Category'/>
      

      <br />
      
      </div>
      </div>

      <div className="btn-div">
        <button className='btn' onClick={updateData}>Update Product</button>

      </div>

    {/* <button onClick={getSingle()}>dsd</button> */}

    </div>
  )
}

export default UpdateProduct