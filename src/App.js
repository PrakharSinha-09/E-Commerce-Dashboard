import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Productlist from './Components/Productlist';
import AddProduct from './Components/AddProduct';
import Profile from './Components/Profile';
import Signout from './Components/Signout';
import UpdateProduct from './Components/UpdateProduct';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <div className="App">
      {/* <AddProduct /> */}
      <Router>
      <Navbar />

        <Routes>

          <Route element={<PrivateRoute />} >
            <Route exact path="/" element={<Productlist />} />
            <Route exact path="/addproduct" element={<AddProduct />} />
            <Route exact path="/update/:id" element={<UpdateProduct />} />
            <Route exact path="/profile/:id" element={<Profile />} />
            <Route exact path="/signout" element={<Signout />} />
          </Route>

            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/signin" element={<Signin />} />
        </Routes>
      </Router>

      <Footer />
      {/* <h1>E-Dashboard</h1> */}
    </div>
  );
}

export default App;
