import React from 'react'
import './HeroStyle.css'
import Hero from './Hero'
import Features from '../features/Features'
import Portfolio from '../portfolio/Portfolio'
import Footer from '../footer/Footer'
// import Contact from '../contact/Contact'
// import Blog from '../blogs/Blog'
// import Testimonial from '../testimonial/Testimonial'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <Portfolio />
            {/* <Testimonial /> */}
            {/* <Blog /> */}
            {/* <Contact /> */}
            <Footer />
        </>
    )
}

export default HomePage
