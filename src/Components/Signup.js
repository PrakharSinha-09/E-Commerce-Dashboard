import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/signup.css';

const Signup = () => {

  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const navigate=useNavigate()

  //if a user exists (means sign up is done) we will not want to him to access signup right!..for doing such thing useEffect() is used
  useEffect(()=>{
    const auth=localStorage.getItem("user") 
    if(auth)
    {
      navigate('/')
    }
  })

  const collectdata=async()=>{
    let result=await fetch('http://localhost:5000/signup',{
      method:"post",
      body:JSON.stringify({name,email,password}),                  //doing JSON. stringify is mandatory
      headers:{
        'Content-Type':'application/json'
      }
    })

    result=await result.json()
    localStorage.setItem("user",JSON.stringify(result))              //keeping the credentials in localstorage will help us in effective routing like if user hasn't signeup/signed he should be able to access the other routes
    console.log(result)
    if(result)
    {
      navigate('/')
    }

  }

  return (
    <div className='parent'>
      <div className="form-parent">

        <h1>Sign Up!</h1><br />
        <i class="fa-sharp fa-solid fa-user fa-2xl enlarge"></i>
        <div className='form-body'>
          {/* <form action="" > */}
            <span>Name </span> <br /><input type="text" className='name no-outline' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your Name'/><br />
            <span>Email</span> <br /><input type="email" className='email no-outline' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Your Email'/><br />
            <span>Password</span> <br /> <input type="password" className='pass no-outline' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
            <div className="btnn">
              <button onClick={collectdata} className='btn'>Sign Up</button>
              
            </div>
          {/* </form> */}
        </div>
      </div>

    </div>
  )
}

export default Signup