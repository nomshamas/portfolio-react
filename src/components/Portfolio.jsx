import React from 'react'
import { Link } from 'react-router-dom'
import porfolioImg from '../assets/portfolio/omsolutionz/final.png'

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center overflow-hidden">
          <h1 className="display-1 text-uppercase text-white stroke-style">Portfolio</h1>
          <h1 className="position-absolute text-uppercase">Recent Work</h1>
        </div>
        <div className="row portfolio_row mt-5">
          <div className="col-md-7 mb-5 mb-md-0">
            <img src={porfolioImg} alt="omsolutionz" title="Portfolio image of OM Soltionz website" className="img-fluid portfolio_img" />
          </div>
          <div className="col-md-5">
            <h2 className="portfolio_title">Visually appealing site on affordable price?</h2>
            <p className="portfolio_text">I will make innovative & attractive web pages so you have a unique and elegant website. </p>
            <Link to='portfolio' className='button cta-01'> View Portfolio </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio