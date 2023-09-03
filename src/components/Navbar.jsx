import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import '../sass/layout/_head.scss'

function Navbar() {
  return (
    <header className='sticky-top'>
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
        <div className="container flex-column flex-sm-row">
          <Link to='/' className="navbar-brand"><img src={logo} alt="Nom Shamas Logo" title="Nom Shamas" target="_blank" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"> <Link to='about' className="nav-link" title="Knowing more about me">About me </Link> </li>
              <li className="nav-item"> <Link to='portfolio' className="nav-link" title="What I have done for my previous clients">Portfolio </Link> </li>
              <li className="nav-item"> <Link to='blog' className="nav-link" title="Blogs">Blog </Link> </li>
              <li className="nav-item"> <Link to='faq' className="nav-link" title="FAQ's">FAQ's </Link> </li>
              <li className="nav-item"> <Link to='contact' className="nav-link" title="To keep in touch">Contact </Link> </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar