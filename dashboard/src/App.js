import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import ProtectedRoute from './components/ProtectedRoute';
import SignIn from './components/auth/SignIn';
import PublicRoute from './components/PublicRoute';
import User from './components/pages/user/User';
import AdoptionComp from './components/pages/adoption_products/AdoptionComp';
import AdoptionCategories from './components/pages/adoption_category/AdoptionCategories';
import AboutUs from './components/pages/about_us/AboutUs';
import BlogProduct from './components/pages/blog_products/BlogProduct';
import BlogCategory from './components/pages/blog_category/BlogCategory';
import ShopProducts from './components/pages/shop_products/ShopProducts';
import ShopCategory from './components/pages/shop_category/ShopCategory';
import Add_Adoption from './components/pages/adoption_category/Add_Adoption';
import Edit_Adoption from './components/pages/adoption_category/Edit_Adoption';
import AddAbout from './components/pages/about_us/AddAbout';
import EditAbout from './components/pages/about_us/EditAbout';
import AddAdoption from './components/pages/adoption_products/AddAdoption';
import EditAdoption from './components/pages/adoption_products/EditAdoption';
import AddBlogCategory from './components/pages/blog_category/AddBlogCategory';
import EditBlogCategory from './components/pages/blog_category/EditBlogCategory';
import AddBlogProduct from './components/pages/blog_products/AddBlogProduct';
import EditBlogproduct from './components/pages/blog_products/EditBlogproduct';
import AddShopProduct from './components/pages/shop_products/AddShopProduct';
import EditShopProduct from './components/pages/shop_products/EditShopProduct';
import AddShopCategory from './components/pages/shop_category/AddShopCategory';
import EditShopCategory from './components/pages/shop_category/EditShopCategory';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ProtectedRoute/>}>
            <Route path='/user' element={<User/>}/>

            <Route path='/adoption' element={<AdoptionComp/>}/>
            <Route path='/add_adoption' element={<AddAdoption/>}/>
            <Route path='/edit_adoption/:adoption_id' element={<EditAdoption/>}/>

            <Route path='/adoption_category' element={<AdoptionCategories/>}/>
            <Route path='/add_category' element={<Add_Adoption/>}/>
            <Route path='/edit_category/:category_id' element={<Edit_Adoption/>}/>

            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/add_aboutus' element={<AddAbout/>}/>
            <Route path='/edit_aboutus/:about_id' element={<EditAbout/>}/>

            <Route path='/blog_product' element={<BlogProduct/>}/>
            <Route path='/add_blog_product' element={<AddBlogProduct/>}/>
            <Route path='/edit_blog_product/:blogedit_id' element={<EditBlogproduct/>}/>
            
            <Route path='/blog_category' element={<BlogCategory/>}/>
            <Route path='/add_blog_category' element={<AddBlogCategory/>}/>
            <Route path='/edit_blog_category/:blog_id' element={<EditBlogCategory/>}/>

            <Route path='/shop_product' element={<ShopProducts/>}/>
            <Route path='/add_shop_product' element={<AddShopProduct/>}/>
            <Route path='/edit_shop_product/:edit_id' element={<EditShopProduct/>}/>

            <Route path='/shop_category' element={<ShopCategory/>}/>
            <Route path='/add_shop_category' element={<AddShopCategory/>}/>
            <Route path='/edit_shop_category/:cate_id' element={<EditShopCategory/>}/>

          </Route>
          <Route path='/' element={<PublicRoute/>}>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>

          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
