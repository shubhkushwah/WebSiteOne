// import React, { useState } from 'react'
// import './NavStyle.css'
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [click, setClick] = useState(false);

//   return (
//     <>
//       <header>
//         <nav className='flexSB'>
//           <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={() => setClick(false)} >
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='/about'>About</Link></li>
//             <li><Link to='/topper'>Team</Link></li>
//             <li><Link to='/pricing'>Pricing</Link></li>
//             <li><Link to='/contact'>Contact</Link></li>
//           </ul>
//           < className='start'>
//             < className='button'>GET CERTIFICATE</>
//           </>

//           <button className='toggle' onClick={() => setClick(!click)} >
//             {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
//           </button>
//         </nav>
//       </header>
//     </>
//   )
// }

// export default Navbar


import React, { useState } from 'react'
import './NavStyle.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  // When scroll header at top
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.screenY > 100)
  })

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
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/topper'>Team</Link></li>
              <li><Link to='/pricing'>Pricing</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
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