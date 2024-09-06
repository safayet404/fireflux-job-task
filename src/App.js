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
            </Routes>
          </div>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;
