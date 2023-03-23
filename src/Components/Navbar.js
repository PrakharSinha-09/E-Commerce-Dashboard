import React from 'react'
import '../Styles/navbar.css';
import { BrowserRouter, Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <BrowserRouter>
    <nav className='navbar'>
        <Link className="nav-link nav-link-ltr" to="/">Products</Link>
        <Link className="nav-link nav-link-ltr" to="/about">Add Products</Link>
        <Link className="nav-link nav-link-ltr" to="/contact">Update Product</Link>
        <Link className="nav-link nav-link-ltr" to="/logout">Logout</Link>
        <Link className="nav-link nav-link-ltr" to="/profile">Profile</Link>
    </nav>
    </BrowserRouter>
    </>
  )
} 

export default Navbar