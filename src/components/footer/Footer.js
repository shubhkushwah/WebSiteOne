import React from 'react'
import './FooterStyle.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-main section_padding">
                    <div className="footer-links">
                        <div className="footer-links-div">
                            <h4>For Business</h4>
                            <a href="/"><p>Employer</p></a>
                            <a href="/"><p>Helth Plan</p></a>
                            <a href="/"><p>Indivisual</p></a>
                        </div>
                        <div className="footer-links-div">
                            <h4>Resources</h4>
                            <a href="/"><p>Employer</p></a>
                            <a href="/"><p>Helth Plan</p></a>
                            <a href="/"><p>Indivisual</p></a>
                        </div>
                        <div className="footer-links-div">
                            <h4>Comapny</h4>
                            <a href="/"><p>Employer</p></a>
                            <a href="/"><p>Helth Plan</p></a>
                            <a href="/"><p>Indivisual</p></a>
                        </div>
                        <div className="footer-links-div">
                            <h4>FOLLOW ME</h4>
                            <div className="socialmedia">
                                <p><i className='fab fa-facebook'></i></p>
                                <p><i className='fab fa-instagram'></i></p>
                                <p><i className='fab fa-linkedin-in'></i></p>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="footer-copyright">
                        <p>&copy;All Right Reserved @SDEmrShubham</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
