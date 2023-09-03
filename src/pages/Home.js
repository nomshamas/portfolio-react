import React from 'react'
import Hero from '../components/Hero'
import Jumbotron from '../components/Jumbotron'
import About from '../components/Me'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
    <div>
      <Hero />
      <Jumbotron />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
    </div>
  )
}

export default Home