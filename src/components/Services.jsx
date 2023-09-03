import React from 'react'

function Service(props) {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="services_card shadow">
        <i className={`fa ${props.icon} services_icon`} aria-hidden="true"></i>
        <div className="services_body">
          <h4 className="services_title">{props.title}</h4>
          <p className="services_text">{props.text}</p>
        </div>
      </div>
    </div>
  )
}

function Services() {

  const services = [
    {
      icon: 'fa-magic',
      title: 'Design',
      text: 'Well-thought-out design help to engages visitors with user-friendly features.'
    },
    {
      icon: 'fa-code',
      title: 'Web Development',
      text: 'Create all types of websites and ensure great experience for web users.'
    },
    {
      icon: 'fa-wordpress',
      title: 'WordPress',
      text: 'Customize any website to fit your business, blog, portfolio, or online store.'
    },
    {
      icon: 'fa-cogs',
      title: 'Support & Maintenance',
      text: 'I will take care of monitoring your website overall health and performance.'
    },
    {
      icon: 'fa-paint-brush',
      title: 'Branding',
      text: 'Goal of this to associate brand with style & quality of product & its experience.'
    },
    {
      icon: 'fa-comments',
      title: 'Consultation',
      text: 'Understanding on certain issues may be required through further consultation.'
    },
  ]

  return (
    <section className="services">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center overflow-hidden">
          <h1 className="display-1 text-uppercase text-white stroke-style">Service</h1>
          <h1 className="position-absolute text-uppercase">Expertise</h1>
        </div>
        <div className="row services_row mt-5">
         {
          services.map((service) => {
            return <Service icon={service.icon} title={service.title} text={service.text} />
          })
         }
        </div>
      </div>
    </section>
  )
}

export default Services