import React, { useEffect, useState } from "react";
import '../Styles/productList.css';
import { Link } from "react-router-dom";
const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async()=>{
    let result = await fetch("http://localhost:5000/products-list");
    result = await result.json();
    setProducts(result);
    console.log(products)
  }

  const deleteProduct=async(id)=>{
    let result=await fetch(`http://localhost:5000/product/${id}`,{
      method:'delete'
    })
    result=await result.json()

    if(result)
    {
      alert("Record Deleted")
      getProduct()
    }
    // console.log(re)
  }

  const searchHandler=async(event)=>{
    let key=event.target.value
    if(key)
    {
      let  result=await fetch(`http://localhost:5000/search/${key}`)
      result=await result.json()
      setProducts(result)
    }
    else{
      getProduct()
      
    }
  }
  return (

    <div className="product-list">
      <h3>Products List</h3>
      <input type="text" className='search no-outline' placeholder="Search For A Product" onChange={searchHandler}/>
      <ul>
        <li>Serial No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      

      {
        products.length>0 ? products.map((item,index)=>
          <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>/<button><Link to={`/update/${item._id}`}>Update</Link></button></li>
          </ul>
        )
        :
        <h3>No Result Found!</h3>
      }
   </div>
    )
};

export default Productlist;
