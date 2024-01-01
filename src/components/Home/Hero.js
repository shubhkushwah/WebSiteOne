import React from 'react'
import './HeroStyle.css'

import Navbar from '../navbar/Navbar'
import hero from '../images/Profile-p.png'
import skill1 from '../images/skill1.png'
import skill2 from '../images/skill3.png'
import skill3 from '../images/skill3.png'
import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
  return (
    <>
      <Navbar />
      <section className='hero' id='home'>
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>Hi, I'm <span>Shubham</span></h1>
            <h2>
              a <span>
                <Typewriter words={[" Professional Coder", " Web Developer", "Freelancer"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione error officiis magni sed numquam aliquam? Expedita repudiandae, laborum perferendis amet debitis qui accusamus quibusdam quo alias animi!</p>
            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className='btn-shadow'>
                    <i className='fab fa-facebook'></i>
                  </button>
                  <button className='btn-shadow'>
                    <i className='fab fa-instagram'></i>
                  </button>
                  <button className='btn-shadow'>
                    <i className='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>

              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className='btn-shadow' >
                  <img src={skill1} alt="" />
                </button>
                <button className='btn-shadow' >
                  <img src={skill2} alt="" />
                </button>
                <button className='btn-shadow' >
                  <img src={skill3} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
