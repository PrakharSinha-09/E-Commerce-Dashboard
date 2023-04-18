import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/profile.css';const Profile = () => {

  const[profile,setProfile]=useState([])
  const params=useParams()

  useEffect(()=>{
    getDetails()
  },[])

  let getDetails=async()=>{
    let result=await fetch(`http://localhost:5000/user-profile/${params.id}`)
    result=await result.json()
    setProfile(result)
  }

  return (
    <div className='profile'>
      <div>
        <h2>Profile</h2>

      </div>
      <div className='details'>
      <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" className='prof-img' alt="" />
       {
         profile.length > 0 ? profile.map((item,index)=>
         <ul key={item._id}>
              <li>Name : {item.name}</li> 
              <li>Email-id : {item.email}</li>
            </ul>
          )
          :
          <h3>No Result Found!</h3>
        }
        </div>

    </div>
  )
}

export default Profile