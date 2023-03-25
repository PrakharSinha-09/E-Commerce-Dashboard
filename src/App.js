import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import AddProduct from './Components/AddProduct';
import Profile from './Components/Profile';
import Logout from './Components/Logout';
import UpdateProduct from './Components/UpdateProduct';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <div className="App">
      {/* <AddProduct /> */}
      <Router>
      <Navbar />

        <Routes>

          <Route element={<PrivateRoute />} >
            <Route exact path="/" element={<Product />} />
            <Route exact path="/addproduct" element={<AddProduct />} />
            <Route exact path="/update" element={<UpdateProduct />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/logout" element={<Logout />} />
          </Route>
          
            <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>

      <Footer />
      {/* <h1>E-Dashboard</h1> */}
    </div>
  );
}

export default App;
