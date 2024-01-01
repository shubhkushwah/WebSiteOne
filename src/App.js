import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './components/about/About'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'
import HomePage from './components/home/HomePage'
import Features from './components/features/Features'

const App = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/feature' element={<Features />} />

          <Route path='about' element={<About />} />
          <Route path='education' element={<Education />} />
          <Route path='experience' element={<Experience />} />
          <Route path='projects' element={<Project />} />
          <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
