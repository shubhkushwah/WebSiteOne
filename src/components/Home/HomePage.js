import React from 'react'
import './HeroStyle.css'
import Hero from './Hero'
import Features from '../features/Features'
import Portfolio from '../portfolio/Portfolio'
// import Blog from '../blogs/Blog'
// import Testimonial from '../testimonial/Testimonial'
// import Services from '../services/Services'

// import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <Portfolio />
            {/* <Testimonial /> */}
            {/* <Blog /> */}
            {/* <Services /> */}
            {/* <Contact /> */}
            <Footer />
        </>
    )
}

export default HomePage
