import React from 'react'
import './Contact.css'
// import img from '../images/contact-right-pic.jpg'
import { FaLock, FaUser } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";  

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <div className="left-container">
                    {/* <img src={img} alt="" /> */}
                    <div className="message-container">
                        <div className="login-box">
                            <h1>Send Message</h1>
                            <div className="input-box">
                                <input type="text" placeholder='First Name' />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder='Last Name' />
                            </div>
                            <div className="input-box">
                                <input type="email" placeholder='Email Id' />
                            </div>
                            <div className="input-box">
                                <input type="number" placeholder='Contact Number' />
                            </div>
                            <div className="input-box text-area">
                                <input type="text" placeholder='Write a message...' />
                            </div>
                        </div>
                        <button type='submit' className='login-btn' >Log In</button>
                    </div>
                </div>
                <div className="right-container">
                    <div className="login-box">
                        <form action="">
                            <h1>Login</h1>
                            <div className="inputs">
                                <div className="input-box">
                                    <FaUser className='icon' />
                                    <input type="text" placeholder='Username' />
                                </div>
                                <div className="input-box">
                                    <FaLock className='icon' />
                                    <input type="password" placeholder='Password' />
                                </div>
                            </div>
                            <div className="login-feture">
                                <div className="forgot">
                                    <a href="/">Forgot Password</a>
                                    <p>Don't have an accound? <a href="/">Resister</a></p>
                                </div>
                                <button type='submit' className='login-btn' >Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
