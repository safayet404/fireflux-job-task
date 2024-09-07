import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import F from "../assets/images/icon.png";
import Account from "../assets/images/Account.png";
import { TbShoppingBag } from "react-icons/tb";
import { ProductContext } from '../context/ProductContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const { cart } = useContext(ProductContext);
  const itemCount = cart;

  return (
    <Navbar collapseOnSelect expand="lg" className='navbar-with-line'>
      <Container>
        <Navbar.Brand className="d-flex">
          <img className="f-logo" src={F} alt="logo" />
          <h2><span className='l-furni'> Furni</span><span className='l-flex'>Flex</span></h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav>
            {/* Using NavLink for active class management */}
            <NavLink className='navItem'  to="/home" activeStyle={{ backgroundColor: '#F8F8F8' }}>
              Home
            </NavLink>
            <NavLink className='navItem' exact to="/product" activeStyle={{ backgroundColor: '#F8F8F8' }}>
              Products
            </NavLink>
            <NavLink className='navItem' to="/category" activeStyle={{ backgroundColor: '#F8F8F8' }}>
              Categories
            </NavLink>
            <NavLink className='navItem' to="/custom" activeStyle={{ backgroundColor: '#F8F8F8' }}>
              Custom
            </NavLink>
            <NavLink className='navItem' to="/blog" activeStyle={{ backgroundColor: '#F8F8F8' }}>
              Blog
            </NavLink>
          </Nav>
        </Navbar.Collapse>

        <Nav className="ms-auto">
          <NavLink to="/cart" className="position-relative">
            <TbShoppingBag className='shopping-cart' />
            <span className="badge">{itemCount.length > 0 ? itemCount.length : 0}</span>
          </NavLink>
          <NavLink to="/account">
            <img className='mt-2' src={Account} alt='account' />
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
