import React, {useState,useEffect} from 'react'
import '../Styles/signup.css';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()

    useEffect(()=>{
        const auth=localStorage.getItem("user") 
        if(auth)
        {
          navigate('/')
        }
      },[])

    let collectdata=async()=>{
        let result=await fetch('http://localhost:5000/signin',{
        method:"post",
        body:JSON.stringify({email,password}),                  //doing JSON. stringify is mandatory
        headers:{
                'Content-Type':'application/json'
            }
        })

        result=await result.json()
        
        if(result.auth)
        {
            localStorage.setItem("user",JSON.stringify(result.user))
            localStorage.setItem("token",JSON.stringify(result.auth))
            navigate("/")
        }
        else{
            alert("Please Enter Correct Details")
        }
    }
  return (
    <div className='parent'>
      <div className="form-parent">

        <h1>Sign In!</h1><br />
        <i className="fa-sharp fa-solid fa-user fa-2xl enlarge"></i>
        <div className='form-body'>
          {/* <form action="" > */}
            <span>Email</span> <br /><input type="email" className='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Your Email'/><br />
            <span>Password</span> <br /> <input type="password" className='pass' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
            <div className="btnn">
              <button onClick={collectdata} className='btn'>Sign In</button>
              
            </div>
          {/* </form> */}
        </div>
      </div>

    </div>
  )
}

export default Signin