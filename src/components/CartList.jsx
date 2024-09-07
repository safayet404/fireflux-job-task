import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';
import { FaPlus, FaMinus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(ProductContext);
  const [localCart, setLocalCart] = useState(cart); // Local cart state

  useEffect(() => {
    setLocalCart(cart); // Sync local state with context state
  }, [cart]);

  const handleIncreaseCount = (productId) => {
    addToCart(localCart.find((product) => product.id === productId));
  };

  const handleDecreaseCount = (productId) => {
    // Find product and decrease quantity
    const product = localCart.find((item) => item.id === productId);
    if (product && product.quantity > 1) {
      product.quantity -= 1;
      setLocalCart([...localCart]); // Update local state
      localStorage.setItem('cart', JSON.stringify(localCart)); // Sync with local storage
    }
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId); // Update context state
    setLocalCart(localCart.filter(item => item.id !== productId)); // Update local state instantly
  };

  const totalPrice = localCart.reduce(
    (total, item) => total + item.priceAfterDiscount * item.quantity,
    0
  );

  return (
    <Container className='mb-4'>
      <Row>
        <Col lg={7} md={12} sm={12}>
          <h4 className="my-4 checkout-header">Your Cart</h4>
          <div className='cart-card'>
            {localCart?.length > 0 &&
              localCart.map((product) => (
                <div key={product.id} className='cart-item'>
                  <Row className='align-items-center'>
                    <Col lg={3}>
                    <div className='quantity-update'>
    <div className='d-flex align-items-center justify-content-center'>
      <p onClick={() => handleDecreaseCount(product.id)} style={{ cursor: 'pointer', margin: "0 10px" }}>
        <FaMinus />
      </p>
      <span>{product.quantity}</span>
      <p onClick={() => handleIncreaseCount(product.id)} style={{ cursor: 'pointer', margin: "0 10px" }}>
        <FaPlus />
      </p>
    </div>
  </div>
                    </Col>
                    <Col lg={6} >
                      <div className='d-flex align-items-center'>
                        <div className='cart-img-card'>

                          <img className="cart-img" src={product.imgSrc} alt={product.name} />
                        </div>


                        <p className='cart-name ms-3'>{product.name}</p>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="position-relative text-end">
                      <span
                        className='cross'
                        onClick={() => handleRemoveItem(product.id)}
                      >
                        <RxCross2 />
                      </span>
                      <p className='cart-name'>€{(product.quantity * product.priceAfterDiscount).toFixed(2)}</p>
                    </Col>
                    <hr className='mt-3'/>
                  </Row>
                </div>
              ))}
          </div>
         
        </Col>
        <Col lg={1}>
        </Col>
        <Col lg={3}>
          <h4 className='my-4 checkout-header'>Order Details</h4>
          <div className='checkout-card'>
            <div className='d-flex justify-content-between'>
              <p className='checkout-item'>Subtotal </p>
              <p className='checkout-item'>€{totalPrice.toFixed(2)}</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p className='checkout-item'>Shipping </p>
              <p className='checkout-item'>Free</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p className='checkout-item'>Estimated Tax </p>
              <p className='checkout-item'>€ -</p>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
              <h2 className='total-amount-text'>Total </h2>
              <h2 className='total-amount'> €{totalPrice.toFixed(2)}</h2>
            </div>
          </div>
          <div>
            <Button className='checkout-button'>GO TO CHECKOUT</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
