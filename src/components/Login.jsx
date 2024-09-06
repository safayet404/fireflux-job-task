import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Chair from "../assets/images/chair.png"
import F from "../assets/images/icon.png"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (


        <Container fluid={true}>
            <Row>
                <Col className='left-section'>
                    <div className="card">
                        <h2 className='welcome-back'>Welcome Back !</h2>
                        <p className='credential-text'>Enter your Credentials to access your account</p>

                        <form className="login-form">
                        <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label className='label' for="floatingInput">Email address</label>
                            </div>

                            <div className="password-input input-container form-floating mb-3">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    required
                                />
                                <label className='label' htmlFor="floatingPassword">Password</label>

                                <span onClick={togglePasswordVisibility} className="eye-icon">
                                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>


                            <span>

                                <a href="#" className="forget-password">Forget Password?</a>
                            </span>


                            <div className="terms">
                                <input type="checkbox" id="terms" required />
                                <label htmlFor="terms">I agree to the <span>Terms & Policy</span></label>
                            </div>


                            <button type="submit" className="signup-button">
                                Login
                            </button>


                            <div class="or-divider">
                                <span class="or-text">or</span>
                            </div>
                            <div className="social-buttons">
                                <button className="social-button google"> <span> <FcGoogle /></span> Sign in with Google</button>
                                <button className="social-button apple"> <span><BsApple /></span> Sign in with Apple</button>
                            </div>
                        </form>



                        <p className="signin-link">
                            Have an account? <a href="#">Sign In</a>
                        </p>
                    </div>
                </Col>


                <Col fluid={true} className='right-section'>
                    <div className="image-container">

                        <img src={Chair} alt="chair" className="main-image" />


                        <div className="overlay">

                            <img src={F} alt="small-icon" className="small-image" />
                            <h2 ><span className='furni'> Furni</span><span className='flex'>Flex</span></h2>
                            <h2 className="overlay-text">Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality</h2>


                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Login;
