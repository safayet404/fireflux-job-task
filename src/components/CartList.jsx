import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';
import { FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(ProductContext);

  // Initialize quantity state for each product
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => {
      acc[product.id] = product.quantity || 1; // Ensure initial quantity is always a number
      return acc;
    }, {})
  );

  const handleIncreaseCount = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Number(prevQuantities[productId]) + 1, // Convert to Number to avoid NaN
    }));
  };

  const handleDescreaseCount = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(Number(prevQuantities[productId]) - 1, 1), // Ensure it doesn't go below 1
    }));
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + (item.priceAfterDiscount * quantities[item.id]),
    0
  );

  return (
    <Container>
      <h1 className="my-4">Your Cart</h1>
      <Row>
        <Col lg={8}>
          <div className='cart-card'>
            {cart?.length > 0 &&
              cart.map((product) => (
                <div key={product.id}>
                  <Row>
                    <Col lg={10}>
                      <div className='d-flex align-items-center'>
                        {/* Quantity Update Section */}
                        <div className='quantity-update d-flex align-items-center' style={{ border: "1px solid #ddd", padding: "5px", marginRight: "15px" }}>
                          <p onClick={() => handleDescreaseCount(product.id)} style={{ cursor: 'pointer', margin: "0 10px" }}>
                            <FaMinus />
                          </p>
                          <span>{quantities[product.id]}</span> {/* Ensure this is a number */}
                          <p onClick={() => handleIncreaseCount(product.id)} style={{ cursor: 'pointer', margin: "0 10px" }}>
                            <FaPlus />
                          </p>
                        </div>

                        {/* Image Section */}
                        <div>
                          <img className="cart-img" src={product.imgSrc} alt={product.name} style={{ marginLeft: '15px', width: '100px', height: '100px', objectFit: 'cover' }} />
                        </div>

                        {/* Product Name Section */}
                        <p className='cart-name ms-3'>{product.name}</p>
                      </div>
                    </Col>
                    {/* Price Section */}
                    <Col lg={2}>
                      <p className='cart-name'>{product.priceAfterDiscount}</p>
                    </Col>
                  </Row>
                </div>
              ))}
          </div>
        </Col>
      </Row>
      {/* Total Price */}
      <Row className="mt-4">
        <Col lg={8}>
          <h4>Total Price: €{totalPrice.toFixed(2)}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
