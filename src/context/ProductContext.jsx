import React, { createContext, useState, useEffect } from 'react';
import data from '../data/furniture.json'; // Update with the actual path to your JSON file

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setProducts(data);

    const uniqueCategories = [...new Set(data.map(product => product.category))];
    setCategories(uniqueCategories);

    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);

      let updatedCart;
      if (productExists) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  return (
    <ProductContext.Provider
      value={{ products, cart, addToCart, removeFromCart, getProductsByCategory, categories }}
    >
      {children}
    </ProductContext.Provider>
  );
};
