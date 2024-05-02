import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Appbar from './components/Appbar';
import Home from './components/home/Home';
import Adoption from './components/adoption/Adoption';
import AboutUs from './components/about/AboutUs';
import OurBlog from './components/blog/OurBlog';
import Shop from './components/shop/Shop';
import ContactUs from './components/contact/ContactUs';
import Footer from './components/Footer';
import Single_Shop from './components/shop/Single_Shop';
import Single_Blog from './components/blog/Single_Blog';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (

    <div className="App">
      <Router>
        <Appbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adoption' element={<Adoption />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/ourblog' element={<OurBlog />} />
          <Route path='/single_blog/:id_blog' element={<Single_Blog />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/single_shopping/:singleshop_id' element={<Single_Shop />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
