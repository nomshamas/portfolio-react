import React from "react";
import stitchgrab from "../assets/portfolio/stitchgrab/desktop.png";
import poolkaro from "../assets/portfolio/pool/desktop.png";
import omsolutionz from "../assets/portfolio/omsolutionz/desktop.png";
import natours from "../assets/portfolio/natours/desktop.png";
import trillo from "../assets/portfolio/trillo/desktop.png";
import Testimonial from "../components/Testimonial";

function Portfolio(props) {
  return (
    <div className="col-md-6">
      <div className="portfolio_page_card">
        <div className="portfolio_page_front shadow">
          <div className="portfolio_page_image">
            <img src={props.src} alt={props.title} className="img-fluid portfolio_page_img" />
          </div>
          <h4 className="portfolio_page_title">{props.title}</h4>
          <p className="portfolio_page_description mb-0"> {props.description} </p>
        </div>
        <div className="portfolio_page_back">
          <a data-toggle="modal" data-target="#portfolo-modal" className="portfolio_page_link" >
            <i className="fa fa-eye" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

function Portfolios() {
  const portfolios = [
    {
      src: stitchgrab,
      title: "Stitchgrab",
      description: "Custom website design",
    },
    {
      src: poolkaro,
      title: "Poolkaro",
      description: "Custom website design",
    },
    {
      src: omsolutionz,
      title: "OM Solutionz",
      description: "Wordpress website design",
    },
    {
      src: natours,
      title: "Natours",
      description: "Custom website design",
    },
    {
      src: trillo,
      title: "Trillo",
      description: "Custom website design",
    },
  ];
  return (
    <div>
      <section className="portfolio_page">
        <div className="container">
          <div className="position-relative overflow-hidden d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white stroke-style"> Portfolio </h1>
            <h1 className="position-absolute text-uppercase">Previous Work</h1>
          </div>
          <div className="row mt-5">
            {
              portfolios.map((portfolio) => {
                return <Portfolio src={portfolio.src} title={portfolio.title} description={portfolio.description} />
              })
            }
          </div>
        </div>
      </section>
      <Testimonial />
    </div>
  );
}

export default Portfolios;
