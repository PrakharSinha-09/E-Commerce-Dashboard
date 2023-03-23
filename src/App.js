import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import AddProduct from './Components/AddProduct';
import Profile from './Components/Profile';
import Logout from './Components/Logout';
import UpdateProduct from './Components/UpdateProduct';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AddProduct /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>

      <Footer />
      {/* <h1>E-Dashboard</h1> */}
    </div>
  );
}

export default App;
