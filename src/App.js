import React from 'react';
import { ProductProvider } from './context/ProductContext';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import CustomPage from './pages/CustomPage';
import BlogPage from './pages/BlogPage';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './components/PrivateRoutes'; 
import PublicRoute from './components/PublicRoute';   

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <div>
            <Routes>
             
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <SignUp />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <PublicRoute>
                    <SignUp />
                  </PublicRoute>
                }
              />

            
              <Route
                path="/nav"
                element={
                  <PrivateRoute>
                    <NavBar />
                  </PrivateRoute>
                }
              />
              <Route
                path="/footer"
                element={
                  <PrivateRoute>
                    <Footer />
                  </PrivateRoute>
                }
              />
              <Route
                path="/product"
                element={
                  <PrivateRoute>
                    <ProductPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <PrivateRoute>
                    <CartPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <HomePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/category"
                element={
                  <PrivateRoute>
                    <CategoryPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/custom"
                element={
                  <PrivateRoute>
                    <CustomPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/blog"
                element={
                  <PrivateRoute>
                    <BlogPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;
