import React from 'react'
import '../Styles/navbar.css';
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {

  const auth=localStorage.getItem("user")
  const navigate=useNavigate()                       //remember useNavigate() hook re renders this entire component, if there is any changes in the navigation that's why without refreshing the page itself signup & signout are getting rendered accordingly dependly if user exist or not

  const logout=()=>{
    localStorage.removeItem("user")
    navigate('/signup')
  }

  return (

    
    <nav className='navbar'>

        <div className='first'>
            <Link className="nav-link nav-link-ltr" to="/">Products</Link>
            <Link className="nav-link nav-link-ltr" to="/addproduct">Add Products</Link>
            <Link className="nav-link nav-link-ltr" to="/update">Update Product</Link>
        </div>

        <div className='second'>
            <Link className="nav-link nav-link-ltr" to="/profile"><i className="fa-solid fa-user fa-xl"></i></Link>
            
            { auth ? <Link onClick={logout} className="nav-link nav-link-ltr" to="/signup">Sign Out</Link> : <Link className="nav-link nav-link-ltr" to="/signup">Sign Up</Link>}
        </div>
    </nav>
    

  )
} 

export default Navbar