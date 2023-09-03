import React from 'react'
import { Link } from 'react-router-dom'

function jumbotron() {
  return (
    <section className="box">
    <div className="container">
      <div className="box_body shadow">
        <h2 className="box_title">Design, Branding & Development.</h2>
        <p className="box_description">Ready for next project. I'm interested in freelance, ambitious & large projects. However if you have other request, don’t hesitate.</p>
        <Link to='contact' className="button cta-01 mx-auto" > Let's Talk </Link>
      </div>
    </div>
  </section>
  )
}

export default jumbotron