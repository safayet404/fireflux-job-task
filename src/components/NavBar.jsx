import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import F from "../assets/images/icon.png";
import Account from "../assets/images/Account.png";
import { TbShoppingBag } from "react-icons/tb";
import { ProductContext } from '../context/ProductContext';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { cart } = useContext(ProductContext);
  const {signOutProfile } = useContext(AuthContext)
  const itemCount = cart;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      signOutProfile() 
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" className='navbar-with-line'>
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <img className="f-logo" src={F} alt="logo" />
          <h2><span className='l-furni'>Furni</span><span className='l-flex'>Flex</span></h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav>
            <NavLink className='navItem' to="/home" activeClassName="active">
              Home
            </NavLink>
            <NavLink className='navItem' exact to="/product" activeClassName="active">
              Products
            </NavLink>
            <NavLink className='navItem' to="/category" activeClassName="active">
              Categories
            </NavLink>
            <NavLink className='navItem' to="/custom" activeClassName="active">
              Custom
            </NavLink>
            <NavLink className='navItem' to="/blog" activeClassName="active">
              Blog
            </NavLink>
          </Nav>
        </Navbar.Collapse>

        <Nav className="ms-auto">
  <NavLink to="/cart" className="position-relative">
    <TbShoppingBag className='shopping-cart' />
    <span className="badge">{itemCount.length > 0 ? itemCount.length : 0}</span>
  </NavLink>

  <NavDropdown
    title={<img className='mt-2' src={Account} alt='account' />}
    id="account-dropdown"
    className="account-dropdown"
  >
    <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
  </NavDropdown>
</Nav>

      </Container>
    </Navbar>
  );
}

export default NavBar;
