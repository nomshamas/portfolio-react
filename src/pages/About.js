import React from "react";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Insights from "../components/Insights";
import { Link } from "react-router-dom";

function About() {
  return (
      <section className="about">
        <div className="container">
          <div className="position-relative overflow-hidden d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white stroke-style"> About </h1>
            <h1 className="position-absolute text-uppercase">Who am i?</h1>
          </div>
          <div className="row about_row mt-5">
            <div className="col-md-8 order-2 order-md-1 mt-5 mt-md-0">
              <h2 className="about_bio">
                <span className="about_intro">My, Myself & I</span>
                <svg x="0px" y="0px" viewBox="0 0 300 12" className="d-block d-md-none" > <path className="st0" d="M3.8,8c0,0,116.5-7.5,160.1-1.8" ></path></svg>
              </h2>
              <br />
              <p className="about_text"> Well-organised person, problem solver, independent with highly focused to do work in freelance market, not to do work 9 to 5 and modernizing the world through my services in future so I adapted the modern techniques and started to provide services to my respective clients in 2020 and continuously growing day-by-day. </p>
              <p className="about_text"> Since beginning of my journey as a freelance developer, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use. </p>
              <p className="about_text"> I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, animations, and coding interactive layouts. </p>
              <Link to='contact' className="button cta-01">Let's make something special!</Link>
            </div>
            <div className="col about_wraper order-1 order-md-2">
              <img src="assets/nom.jpeg" alt="nouman" className="img-fluid about_img" />
              <div className="about_bar1"></div>
              <div className="about_bar2"></div>
              <div className="about_bar3"></div>
            </div>
          </div>
          <Skills />
          <Insights />
          <Experience />
        </div>
      </section>
  );
}

export default About;
