import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Grains from './components/Grains/Grains'
import Addproduct from './components/Grains/Addproduct';
import UpdateProduct from './components/Grains/UpdateProduct';
import ProductTemp from './components/Grains/ProductTemp';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <>

    <Router>
      <Navbar/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/grains" element={<Grains />} />
        <Route exact path="/addProduct" element={<Addproduct />} />
        <Route exact path="/auction/:id" element={<UpdateProduct />} />
        <Route exact path="/product/:id" element={<ProductTemp />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
