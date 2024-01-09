import React, { useState } from 'react'
import './NavStyle.css'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'

const Navbar = () => {

  // When scroll header at top
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 60)
  })

  // Scroll handler
 

  // Toggle menu
  const [Mobile, setMobile] = useState(false)

  return (
    <>
      <header className='header'>
        <div className="container d_flex">
          <div className="logo">
            {/* <img src="" alt="" /> */}
            <h3>Logo</h3>
          </div>

          <div className="navlink">
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/features'>Features</Link></li>
              <li><Link to='/portfolio'>Portfolio</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/testimonial'>Testimonial</Link></li>
              <li><button className='home-btn'>Resister</button></li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)} >
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
