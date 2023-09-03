import React from 'react'
import a from '../assets/testimonial/a.webp'
import b from '../assets/testimonial/b.webp'
import c from '../assets/testimonial/c.webp'
import d from '../assets/testimonial/d.webp'
import e from '../assets/testimonial/e.webp'

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center overflow-hidden">
          <h1 className="display-1 text-uppercase text-white stroke-style">Review</h1>
          <h1 className="position-absolute text-uppercase">Happy Clients</h1>
        </div>
        <div className="swiper testimonial_swiper mt-5">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="card border-0">
                <div className="card-body">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-sm-4 p-2 mb-5 mb-md-0">
                      <div className="testimonial_img-wrapper shadow">
                        <img src={a} alt="" className="img-fluid testimonial_img" />
                      </div>
                      <div className="testimonial_bar-1"></div>
                      <div className="testimonial_bar-2"></div>
                      <div className="testimonial_bar-3"></div>
                    </div>
                    <div className="col-md-6 testimonial_quote">
                      <p className="card-text">Not only was Nouman’s work on-time, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is willing to work through issues as they arise. It’s obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again.</p>
                      <h5 className="card-title">Mr Mahad Khan</h5>
                      <p className="card-text"><small className="text-muted">@_PoolKaro</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card border-0">
                <div className="card-body">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-sm-4 abc p-2 mb-5 mb-md-0">
                      <div className="testimonial_img-wrapper shadow">
                        <img src={b} alt="" className="img-fluid testimonial_img" />
                      </div>
                      <div className="testimonial_bar-1"></div>
                      <div className="testimonial_bar-2"></div>
                      <div className="testimonial_bar-3"></div>
                    </div>
                    <div className="col-md-6 testimonial_quote">
                      <p className="card-text">I came to Nouman for a facelift for my site. I have been thoroughly delighted with the experience - Nouman is a very talented Developer, but also a lot more than that - his ability to grasp things with a fresh pair of eyes is great, and he has the seniority to project manage everything himself. Absolutely brilliant!</p>
                      <h5 className="card-title">Mr Mutayab Malik</h5>
                      <p className="card-text"><small className="text-muted">@_OM Solutionz</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card border-0">
                <div className="card-body">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-sm-4 abc p-2 mb-5 mb-md-0">
                      <div className="testimonial_img-wrapper shadow">
                        <img src={c} alt="" className="img-fluid testimonial_img" />
                      </div>
                      <div className="testimonial_bar-1"></div>
                      <div className="testimonial_bar-2"></div>
                      <div className="testimonial_bar-3"></div>
                    </div>
                    <div className="col-md-6 testimonial_quote">
                      <p className="card-text">We have the fortune of working with Nouman on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as is outlined. Beyond that, his development skills and expertise make him an invaluable part of our process. We absolutely offer our highest possible recommendation.</p>
                      <h5 className="card-title">Mr William</h5>
                      <p className="card-text"><small className="text-muted">@_Stitchgrab</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card border-0">
                <div className="card-body">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-sm-4 abc p-2 mb-5 mb-md-0">
                      <div className="testimonial_img-wrapper shadow">
                        <img src={d} alt="" className="img-fluid testimonial_img" />
                      </div>
                      <div className="testimonial_bar-1"></div>
                      <div className="testimonial_bar-2"></div>
                      <div className="testimonial_bar-3"></div>
                    </div>
                    <div className="col-md-6 testimonial_quote">
                      <p className="card-text">Working with Nouman was better than expected and we had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients.</p>
                      <h5 className="card-title">Mr Samm Jordan</h5>
                      <p className="card-text"><small className="text-muted">@_Natours</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card border-0">
                <div className="card-body">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-sm-4 abc p-2 mb-5 mb-md-0">
                      <div className="testimonial_img-wrapper shadow">
                        <img src={e} alt="" className="img-fluid testimonial_img" />
                      </div>
                      <div className="testimonial_bar-1"></div>
                      <div className="testimonial_bar-2"></div>
                      <div className="testimonial_bar-3"></div>
                    </div>
                    <div className="col-md-6 testimonial_quote">
                      <p className="card-text">Nouman provided top quality, thoughtful and high impact design work with outstanding attention to detail. His communication was excellent from the outset and showed a willingness to persevere until the perfect design was achieved. Obviously passionate about the work, a true professional. Wouldn’t hesitate to recommend.</p>
                      <h5 className="card-title">Mr Schamman</h5>
                      <p className="card-text"><small className="text-muted">@_Trillo</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div> --> */}
        </div>
      </div>
    </section>
  )
}

export default Testimonial