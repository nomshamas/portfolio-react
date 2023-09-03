import React from 'react'

function Experience() {
  return (
    <section className="about_page">
      <div className="container">
        <div className="position-relative overflow-hidden d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white stroke-style"> About </h1>
          <h1 className="position-absolute text-uppercase">Experience</h1>
        </div>
        <div className="main-timeline mt-5">
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">Present</span>
                  <span className="year">2022</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="about_page_role"> Software Engineer{" "} <span className="about_page_company">@ OM Solutionz</span>
              </h5>
              <h6 className="about_page_date"> {" "} <i className="fa fa-calendar text-success mr-3"></i> Mar 2022 -{" "} <span className="bg-success text-white p-1 rounded-sm"> Current </span>
              </h6>
              <p className="about_page_description">
                <b>Role & Responsibilities:</b>
                <br /> Bringing mock-ups to life. Building responsive & Interactive websites. Accurately providing estimated development times. Identifying and solving conflics. Monitoring and Supervising. Collaborated with product team to implement new features. Establish requirements & determine priorities. Communicating technical issues in an understandable manner to the team.
              </p>
            </div>
          </div>
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">3 Months</span>
                  <span className="year">2021</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="about_page_role"> WordPress Developer{" "} <span className="about_page_company">@ Salam Experts</span>
              </h5>
              <h6 className="about_page_date">Mar 2021 - May 2021 · 3 mos</h6>
              <p className="about_page_description">
                <b>Role & Responsibilities:</b>
                <br /> Learned Theme Customizations & Development. Design portfolio website in WordPress.
              </p>
            </div>
          </div>
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">3 Months</span>
                  <span className="year">2020</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="about_page_role"> Web Developer{" "} <span className="about_page_company"> @ DivStack technologies </span>
              </h5>
              <h6 className="about_page_date">Sep 2020 - Dec 2020 · 4 mos</h6>
              <p className="about_page_description">
                <b>Role & Responsibilities:</b>
                <br /> Learned Modern CSS, Bootstrap, Tailwind & SAAS. Design more than 8 project which include my portfolio. Convert Psd and Figma to Web pages. Debugging the bugs and fix them.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience