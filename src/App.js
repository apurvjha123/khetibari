import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Auction from './components/Auction'
import Addproduct from './components/Addproduct';
import UpdateProduct from './template/UpdateProduct';
import ProductTemp from './template/ProductTemp';
import Register from './components/Register';

function App() {
  return (
    <>

    <Router>
      <Navbar/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/auction" element={<Auction />} />
        <Route exact path="/addProduct" element={<Addproduct />} />
        <Route exact path="/auction/:id" element={<UpdateProduct />} />
        <Route exact path="/product/:id" element={<ProductTemp />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
