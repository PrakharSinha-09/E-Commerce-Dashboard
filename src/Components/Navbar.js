import React from 'react'
import '../Styles/navbar.css';
import { Link,useNavigate } from 'react-router-dom'
import img1 from '../Assets/img1.png'


const Navbar = () => {

  const auth=localStorage.getItem("user")
  const navigate=useNavigate()                       //remember useNavigate() hook re renders this entire component, if there is any changes in the navigation that's why without refreshing the page itself signup & signout are getting rendered accordingly dependly if user exist or not

  const logout=()=>{
    localStorage.removeItem("user")
    navigate('/signup')
  }

  return (

    
    <nav className='navbar'>

        <img src={img1} alt="" className='logoo' />
        { auth ?
          <>

          <div className='first'>
              <Link className="nav-link nav-link-ltr" to="/">Products</Link>
              <Link className="nav-link nav-link-ltr" to="/addproduct">Add Products</Link>
              <Link className="nav-link nav-link-ltr" to="/update">Update Product</Link>
          </div>

          <div className='second'>
              <Link className="nav-link nav-link-ltr" to="/profile"><i className="fa-solid fa-user fa-xl"></i></Link>
              <Link onClick={logout} className="nav-link nav-link-ltr" to="/signup">Sign Out ( {(JSON.parse(auth).name)} )</Link>
          </div>

          </>

          :
         
          <div className='nav-right'>
          <Link className="nav-link nav-link-ltr" to="/signup">Sign Up</Link>
          <Link className="nav-link nav-link-ltr" to="/signin">Sign In</Link> 
          </div>

        }
          
    </nav>
    

  )
} 

export default Navbar