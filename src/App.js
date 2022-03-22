import './App.css';
import About from './componants/About';
import Contact from './componants/Contact';
import Header from './componants/Header';
import Footer from './componants/Footer';
import Home from './componants/Home';
import { Routes, Route } from "react-router-dom";
import Products from './componants/Products';
import ProductDetails from './componants/ProductDetails';
import Cart from './componants/Cart';
import Checkout from './componants/Checkout';
import ProductPage from './componants/ProductPage';
import Login from './componants/buttons/Login';
// import Signup from './componants/buttons/Signup';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={   <About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Products />} />
        <Route path='/product' element={<ProductPage/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id/:name" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/signup" element={<Signup/>} /> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
