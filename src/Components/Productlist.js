import React, { useEffect, useState } from "react";
import '../Styles/productList.css';
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


  return (

    <div className="product-list">
      <h3>Products List</h3>

      <ul>
        <li>Serial No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
      </ul>
      

      {
        products.map((item,index)=>
          <ul>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
          </ul>
        )
      }
   </div>
    )
};

export default Productlist;
