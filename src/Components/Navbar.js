import React from 'react'
import '../Styles/navbar.css';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (

    
    <nav className='navbar'>

        <div className='first'>
            <Link className="nav-link nav-link-ltr" to="/">Products</Link>
            <Link className="nav-link nav-link-ltr" to="/addproduct">Add Products</Link>
            <Link className="nav-link nav-link-ltr" to="/update">Update Product</Link>
        </div>

        <div className='second'>
            <Link className="nav-link nav-link-ltr" to="/profile"><i className="fa-solid fa-user fa-xl"></i></Link>
            <Link className="nav-link nav-link-ltr" to="/logout">Sign in</Link>
            <Link className="nav-link nav-link-ltr" to="/signup">Sign Up</Link>
        </div>
    </nav>
    

  )
} 

export default Navbar