import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Auction from './components/Auction'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/auction" element={<Auction />} />
      </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
