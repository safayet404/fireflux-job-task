import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProductList from './components/ProductList';
import Cart from './components/CartList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import CustomPage from './pages/CustomPage';
import BlogPage from './pages/BlogPage';

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
      <Router>
          <div>
            <Routes>
              <Route path="/" element={<SignUp />} /> {/* Default Route */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/nav" element={<NavBar />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/custom" element={<CustomPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </div>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;
