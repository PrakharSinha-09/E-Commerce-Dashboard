import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'
const PrivateRoute = () => {
    const auth=localStorage.getItem("user")
  return auth ? <Outlet /> : <Navigate to="/signup" />
}

export default PrivateRoute


//Private Route Functionality OF React is so cool..if you want to do somewhat like without this, user should be
//deprived of accessing other routes (for example suppose user hasn't signed up/sign in and want to acess those functionalities)
//we can do it like this and in the app.js file see, how it is written