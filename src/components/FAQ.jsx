import React from 'react'

function FAQ() {
  return (
    <section className="faq">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center overflow-hidden">
          <h1 className="display-1 text-uppercase text-white stroke-style">FAQ's</h1>
          <h1 className="position-absolute text-uppercase">Answers</h1>
        </div>
        <div className="accordion mt-5" id="accordionExample">
          <div className="card faq_card">
            <div className="card-header faq_header" id="headingOne">
              <h2 className="mb-0">
                <a className="btn btn-link faq_btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How long will it take to finish the website?
                </a>
              </h2>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                <p className="card-text faq_detail">This will depend a lot on what type of web page you want, the modifications you want to make, etc. But the usual work process is usually 3 – 6 weeks.</p>
              </div>
            </div>
          </div>
          <div className="card faq_card">
            <div className="card-header faq_header" id="headingTwo">
              <h2 className="mb-0">
                <a className="btn btn-link faq_btn collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Will my website look good on mobiles and tablets?
                </a>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                <p className="card-text faq_detail">Yes, all my designs are mobile and tablet friendly fully optimized for Responsive.</p>
              </div>
            </div>
          </div>
          <div className="card faq_card">
            <div className="card-header faq_header" id="headingThree">
              <h2 className="mb-0">
                <a className="btn btn-link faq_btn collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  How is payment made?
                </a>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
                <p className="card-text faq_detail">Payments will be made by bank transfer and will be paid as follows:
                  Once the project has been written and the idea elaborated, 50% of the total amount will be charged.
                  Once the web page is finished (with all the modifications made) the remaining 50% will be paid.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ