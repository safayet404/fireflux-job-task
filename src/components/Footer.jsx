import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { Col, Container, Nav, Row } from "react-bootstrap";
import US from "../assets/images/flag.png"
import Navbar from 'react-bootstrap/Navbar';
import F from "../assets/images/icon.png"

const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <Container className="footer-with-line">
                    <Row className="mt-5 mb-4">
                        <Col lg={3} md={6} sm={12} className="mt-3 mx-auto">
                            <Navbar.Brand className="d-flex mt-3">
                                <img className="f-logo" src={F} alt="logo" />
                                <h2><span className='furni-footer'>Furni</span><span className='flex-footer'>Flex</span></h2>
                            </Navbar.Brand>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="mt-5">
                            <h4 className="footer-head mb-4">About US</h4>
                            <div className="footer-links d-flex flex-column">
                                <p className="footer-item py-2 mb-1">Master Plan</p>
                                <p className="footer-item py-2 mb-1">Jobs</p>
                                <p className="footer-item py-2 mb-1">Invest</p>
                                <p className="footer-item py-2 mb-1">Pressroom</p>
                                <p className="footer-item py-2 mb-1">Blogs</p>
                                <p className="footer-item py-2 mb-1">Contact</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="mt-5">
                            <h4 className="footer-head mb-4">Explore EEVE</h4>
                            <div className="footer-links d-flex flex-column">
                                <p className="footer-item py-2 mb-1">Unlock my Robot Power</p>
                                <p className="footer-item py-2 mb-1">Starlight</p>
                                <p className="footer-item py-2 mb-1">Robot Platform</p>
                                <p className="footer-item py-2 mb-1">EEVE Roadmap</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="mt-5">
                            <h4 className="footer-head mb-4">Community & Support</h4>
                            <div className="footer-links d-flex flex-column">
                                <p className="footer-item py-2 mb-1">Williow X Community</p>
                                <p className="footer-item py-2 mb-1">Developer & Maker Access</p>
                                <p className="footer-item py-2 mb-1">Special Cases</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <footer>
                <Container>
                    <Row>
                        <Col>
                            <Navbar collapseOnSelect expand="lg">
                                <Container>
                                    <ul>
                                        <li className="d-flex">
                                            <p className="social"><FaInstagram /></p>
                                            <p className="social"><SlSocialFacebook /></p>
                                            <p className="social"><BsTwitterX /></p>
                                            <p className="social"><FiLinkedin /></p>
                                        </li>
                                    </ul>
                                    <Navbar.Collapse className="justify-content-center">
                                        <Nav>
                                            <p className='footer-item px-3'>March22 Recap</p>
                                            <p className='footer-item px-3'>Privacy Policy</p>
                                            <p className='footer-item px-3'>General Terms</p>
                                            <p className='footer-item px-3'>Contact</p>
                                        </Nav>
                                    </Navbar.Collapse>
                                    <div className="d-flex justify-content-center">
                                        <p>
                                            <img className="flag" src={US} alt="flag" />
                                            <span className="footer-item">United States (English)</span>
                                        </p>
                                    </div>
                                </Container>
                            </Navbar>
                            <p className="text-center mb-0 right-reserved">EEVE &copy; 2024. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
