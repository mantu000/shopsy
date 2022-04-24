import {React}  from 'react'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import About from '../components/About/About';
import Home from '../components/Home/Home';
import Header from '../components/Layout/Header';
import Signup from '../Authentication/Registration/Signup';
import Login from '../Authentication/Login/Login';


import PCat from '../components/product/Pcat/PCat';
// import ProtectedRoutes from './ProtectedRoutes';
import PSub from '../components/product/PSubcat/PSub';
import Footer from '../components/Footer/footer'





export default function RootRotes() {



  return (
    <Router>
      <Header />
      
      
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="About_page" element={<About />} />
          <Route path="Signup_page" element={<Signup />} />
          <Route path="Login_page" element={<Login />} />
          <Route path="product_page" element={<PCat />} />
          <Route path="Product_page" element={<PSub />} />
        </Routes>

     
        <Footer />
    </Router>
  )
}
