import React from 'react'
import user from '../assets/nom.jpeg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center overflow-hidden">
          <h1 className="display-1 text-uppercase text-white stroke-style">About</h1>
          <h1 className="position-absolute text-uppercase">About Me</h1>
        </div>
        <div className="row about_row mt-5">
          <div className="col-md-8 order-2 order-md-1 mt-5 mt-md-0">
            <h2 className="about_bio">
                <span className="about_intro">I'm Nom<span className="about_intro-last"> Shamas.</span></span>
                <span className="about_designation">Front-End Software Engineer</span>
                <svg x="0px" y="0px" viewBox="0 0 300 12" className="d-block d-md-none">
                  <path className="st0" d="M3.8,8c0,0,116.5-7.5,160.1-1.8"></path>
                </svg>
            </h2>
            <br />
              <p className="about_text">I'm young Web Developer with <strong>a year of experience</strong>, having advance skills in developing responsive user interfaces and interactive websites. <strong>Acquired fame and popularity as front-end developer</strong>..</p>
              <div className="d-flex flex-wrap">
                <Link to='' className="button cta-01 mr-2 mb-2 mb-sm-0"> Resume </Link>
                <Link to='about' className="button cta-02"> Learn more </Link>
              </div>
          </div>
          <div className="col about_wraper order-1 order-md-2">
            <img src={user} alt="" title="" className="img-fluid about_img" />
            <div className="about_bar1"></div>
            <div className="about_bar2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About