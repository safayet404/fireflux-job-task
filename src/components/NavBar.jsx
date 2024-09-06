import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import F from "../assets/images/icon.png"
import Account from "../assets/images/Account.png"
import { TbShoppingBag } from "react-icons/tb";
import { ProductContext } from '../context/ProductContext';
import { useContext } from 'react';
const NavBar = () => {

  const {cart} = useContext(ProductContext)

    const itemCount = cart;
    
    console.log("length",itemCount);
    

  return (
    <Navbar collapseOnSelect expand="lg" className='navbar-with-line'>
      <Container>
      
        <Navbar.Brand className="d-flex">
          <img className="f-logo" src={F} alt="logo" />
          <h2 ><span className='l-furni'> Furni</span><span className='l-flex'>Flex</span></h2>
    
        </Navbar.Brand>
        

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link className='navItem' href="#features">Home</Nav.Link>
            <Nav.Link className='navItem' href="#pricing">Products</Nav.Link>
            <Nav.Link className='navItem' href="#pricing">Categories</Nav.Link>
            <Nav.Link className='navItem' href="#pricing">Custom</Nav.Link>
            <Nav.Link className='navItem' href="#pricing">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className="ms-auto">
        <Nav.Link href="#deets" className="position-relative">
      <TbShoppingBag className='shopping-cart' />
      <span className="badge">{itemCount.length > 0 ? itemCount.length : 0}</span>
      
    </Nav.Link>          
    <Nav.Link eventKey={2} href="#memes">
            <img src={Account} alt='account' />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
