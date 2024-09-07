import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbShoppingBag } from "react-icons/tb";
import { ProductContext } from '../context/ProductContext';

const ProductList = () => {
  const { getProductsByCategory, addToCart, categories } = useContext(ProductContext);

  const [selectedCategory, setSelectedCategory] = useState('Rocking Chair');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const currentItems = getProductsByCategory(selectedCategory).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(getProductsByCategory(selectedCategory).length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to the top of the product container
    document.querySelector('.product-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    // Scroll to the top of the product container
    document.querySelector('.product-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Container className='mt-5'>
      <Row>
        <Col lg={2} md={3} sm={12} className="categories-section mb-5" style={{ borderRight: "2px solid #F1F1F1"}}>
          {categories.map((category) => (
            <Button 
              key={category}
              style={{
                backgroundColor: selectedCategory === category ? "#000" : "transparent",
                color: selectedCategory === category ? "#fff" : "#000",
                border: "none",
                borderBottom: "2px solid #F1F1F1"
              }}
              className="mb-4 category-button"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </Col>

        <Col lg={9} md={9} sm={12} className="categories-section product-container">
          <Row>
            {currentItems.map((product) => (
              <Col md={6} lg={4} sm={6} key={product.id}>
                <div className="product-card">
                  <div className='image-card'>
                    <img src={product.imgSrc} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="price">
                      €{product.priceAfterDiscount} <span className="old-price">€{product.price}</span> 30% OFF
                    </p>
                    <p>{product.description}</p>
                    <button onClick={() => addToCart(product)}>
                      <TbShoppingBag className='cart-button' /> Add to cart
                    </button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {/* Wrapper for pagination */}
          <div className="pagination-wrapper">
            <Pagination className="mt-4 pagination-color">
              <Pagination.Prev
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                disabled={currentPage === 1}
              />
              {Array.from({ length: totalPages }, (_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handlePageChange(index + 1);
                  }}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  if (currentPage < totalPages) handlePageChange(currentPage + 1);
                }}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
