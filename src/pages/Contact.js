import React from "react";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white overflow-hidden stroke-style">
            Contact
          </h1>
          <h1 className="position-absolute text-uppercase">Lets connect</h1>
        </div>
        <div className="row justify-content-between align-items-center no-gutters mt-5 shadow py-5 px-4 px-md-5">
          <div className="col-md-7">
            <form>
              <h4 className="mb-5">Send a message</h4>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control contact_field"
                  id="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-row">
                <div className="col-12 form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control contact_field"
                    id="email"
                    placeholder="example@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-row abc">
                <div className="col-12 form-group mb-3">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    className="form-control contact_field"
                    id="date"
                    placeholder="Date"
                    required
                  />
                </div>
              </div>
              {/* <!--<input type="date" placeholder="Date">--> */}
              <div className="form-row abc">
                <div className="col-12 form-group mb-3">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    className="form-control contact_field"
                    id="time"
                    placeholder="Time"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-12 mb-3">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    className="form-control contact_field"
                    id="phone"
                    placeholder="xxx xxx xxxxxxx"
                    required
                  />
                  <small>
                    <span className="text-danger">*</span> Enter number with
                    country code
                  </small>
                </div>
              </div>
              <div className="form-row">
                <div className="col-12 mb-3">
                  <label htmlFor="message">Describe your message</label>
                  <textarea
                    className="form-control contact_field"
                    id="message"
                    rows="4"
                    placeholder="Describe message!"
                  ></textarea>
                </div>
              </div>
              {/* <!-- <button className="btn contact_btn" type="submit">Submit form</button> --> */}
              <button className="button cta-01" href="contact.html">
                <span className="">Send message</span>
              </button>
            </form>
          </div>
          {/* <svg viewBox="0 0 160 10" xml: space="preserve" className="d-block d-md-none mt-5"><path className="st0" d="M3.8,8c0,0,116.5-7.5,160.1-1.8"></path></svg> */}
          <div className="col-md-4 mt-5 mt-md-0">
            <h4 className="mb-5">Contact information</h4>
            <div className="contact_description">
              <a
                className="contact_email shadow-sm"
                href="mailto: nomshamas@gmail.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </a>
              <div>
                <a className="contact_label" href="mailto: nomshamas@gmail.com">
                  nomshamas@gmail.com
                </a>
              </div>
            </div>
            <div className="contact_description">
              <a
                href="tel:// +92 349 4091964"
                className="contact_phone shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
              </a>
              <div>
                <a href="tel:// +92 349 4091964" className="contact_label">
                  +92 349 4091964
                </a>
              </div>
            </div>
            <div className="d-flex flex-wrap mt-5">
              <a
                href="https://www.fiverr.com/nomshamas?public_mode=true"
                className="mr-2 shadow-sm p-2"
              >
                <svg height="20" viewBox="0 0 89 27" fill="none">
                  <g fill="#404145">
                    <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                  </g>
                  <g fill="#1dbf73">
                    <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~012ef7c66fbbee0317"
                className="mr-2 shadow-sm p-2">
                <svg
                  height="20"
                  viewBox="0 0 102 28"
                  role="img"
                  aria-hidden="true"
                >
                  <path
                    fill="#14a800"
                    d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
                  ></path>{" "}
                  <path
                    fill="#14a800"
                    d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
                  ></path>{" "}
                  <polygon
                    fill="#14a800"
                    points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
                  ></polygon>{" "}
                  <path
                    fill="#14a800"
                    d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
                  ></path>{" "}
                  <path
                    fill="#14a800"
                    d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
                  ></path>
                </svg>
              </a>
              <a href="https://www.guru.com/freelancers/nouman-bin-sami" className="shadow-sm p-2">
                <svg
                  class="c-header__logo"
                  role="img"
                  aria-label="Guru Home"
                  alt="Guru"
                  viewBox="0 0 250.7 56.8"
                  height="20"
                  enable-background="new 0 0 250.7 56.8"
                >
                  <g>
                    <title id="logo-title">Guru</title>
                    <path d="M162.4 9.2v16.1c0 5.5-6.6 10.1-14.5 10.1 -7.9 0-14.5-4.6-14.5-10.1V9.4h-5.9v15.8c0 8.8 9.2 16 20.4 16 11.3 0 20.4-7.2 20.4-16V9.2H162.4z"></path>
                    <path d="M244.8 9.2v16.1c0 5.5-6.6 10.1-14.5 10.1 -7.9 0-14.5-4.6-14.5-10.1V9.4h-5.9v15.8c0 8.8 9.2 16 20.4 16 11.3 0 20.4-7.2 20.4-16V9.2H244.8z"></path>
                    <path d="M178.6 41.3h-5.9V9.2h5.9v13c9.2-12 26-13 26.2-13l0.3 5.9C204 15.2 178.6 16.7 178.6 41.3z"></path>
                    <path d="M118 9.2v4.8c-3.7-2.9-8.8-4.8-14.5-4.8 -11.3 0-20.4 7.2-20.4 16 0 8.8 9.2 16 20.4 16 5.7 0 10.8-1.8 14.5-4.8v4.3c0 5.5-6.6 10.1-14.5 10.1 -6.3 0-11.8-3-13.7-7l-5.7 1.8c2.6 6.5 10.4 11.2 19.4 11.2 11 0 20-6.9 20.4-15.5h0V9.2H118zM103.5 35.3c-7.9 0-14.5-4.6-14.5-10.1 0-5.5 6.6-10.1 14.5-10.1 7.9 0 14.5 4.6 14.5 10.1C118 30.7 111.4 35.3 103.5 35.3z"></path>
                    <path d="M46.6 33.9c2.8 0.7 5.5 1.6 8.1 2.9 2.6 1.2 4.9 2.7 7.1 4.4 2.2 1.7 4.2 3.6 6.1 5.7 1.9 2.1 3.5 4.3 4.9 6.8H62.3c-1.6-1.9-3.3-3.6-5.2-5.1 -1.9-1.5-4-2.8-6.2-3.9 -2.2-1.1-4.5-1.9-6.9-2.5 -2.4-0.6-4.9-0.9-7.6-0.9 -2.7 0-5.2 0.3-7.7 0.9 -2.5 0.6-4.8 1.4-6.9 2.5 -2.2 1.1-4.2 2.4-6.1 3.9 -1.9 1.5-3.7 3.2-5.2 5.1H0c1.4-2.5 3-4.7 4.9-6.9 1.9-2.1 3.9-4 6.2-5.7 2.3-1.7 4.7-3.1 7.2-4.3 2.6-1.2 5.3-2.2 8.1-2.9 -2.5-0.6-4.8-1.4-6.9-2.4 -2.2-1-4.2-2.2-6.2-3.6 -2-1.4-3.8-2.9-5.5-4.6 -1.7-1.7-3.2-3.6-4.6-5.5 0.7-1.1 1.4-2.1 2.3-3.1 0.8-1 1.7-1.9 2.6-2.8S9.9 10 11 9.2c1-0.8 2-1.6 3-2.3 0.1-0.9 0.3-1.7 0.7-2.4 0.4-0.7 0.9-1.4 1.5-2 0.6-0.6 1.3-1.1 2.1-1.4 0.8-0.3 1.6-0.5 2.5-0.5 1 0 1.9 0.2 2.7 0.6 0.8 0.4 1.6 0.9 2.2 1.5 0.6 0.6 1.2 1.4 1.5 2.2C27.8 5.8 28 6.7 28 7.7c0 1-0.2 1.9-0.6 2.7 -0.4 0.8-0.9 1.6-1.5 2.2 -0.6 0.6-1.4 1.1-2.2 1.5 -0.8 0.3-1.7 0.5-2.7 0.5 -0.2 0-0.4 0-0.7 0 -0.2 0-0.5 0-0.7-0.1 -0.2 0-0.4-0.1-0.7-0.2 -0.2-0.1-0.5-0.2-0.7-0.3 -0.4 0.3-0.8 0.6-1.1 0.9 -0.3 0.3-0.7 0.6-1.1 0.9 -0.4 0.3-0.8 0.6-1.1 0.9 -0.3 0.3-0.7 0.6-1 1 1.5 1.4 3 2.7 4.7 3.8 1.7 1.2 3.5 2.2 5.4 2.9 1.9 0.8 3.9 1.4 6 1.8 2.1 0.4 4.3 0.7 6.4 0.7 2.2 0 4.3-0.2 6.4-0.7 2.1-0.4 4.1-1.1 6-1.8 1.9-0.8 3.7-1.8 5.4-2.9 1.7-1.2 3.2-2.5 4.7-3.8h0.1c0-0.1 0-0.2 0-0.3 0-0.1 0-0.2 0-0.3 0-0.1 0-0.2 0-0.3 0-0.1 0-0.2 0-0.3 0-1 0.2-1.9 0.5-2.8 0.3-0.9 0.9-1.7 1.5-2.4 0.7-0.7 1.5-1.2 2.4-1.5 0.9-0.3 1.8-0.5 2.8-0.5 1 0 1.9 0.2 2.8 0.5 0.9 0.3 1.6 0.9 2.3 1.5 0.6 0.7 1.2 1.5 1.5 2.4 0.4 0.9 0.6 1.8 0.6 2.8 0 1-0.2 1.9-0.6 2.8 -0.4 0.9-0.9 1.6-1.5 2.3 -0.6 0.6-1.4 1.2-2.3 1.5 -0.9 0.4-1.8 0.6-2.8 0.6 -0.2 0-0.3 0-0.4 0 -0.1 0-0.2 0-0.4 0 -0.1 0-0.3 0-0.4-0.1 -0.1 0-0.2-0.1-0.4-0.1 -1.2 1.2-2.5 2.3-3.9 3.4 -1.4 1.1-2.9 2.1-4.4 2.9 -1.5 0.9-3.1 1.7-4.8 2.4C50.1 33 48.3 33.5 46.6 33.9z"></path>
                    <path
                      fill="currentColor"
                      id="arch"
                      d="M32 8.7c0-0.1 0-0.2 0-0.3 0-0.1 0-0.2 0-0.3 0-0.1 0-0.2 0-0.3s0-0.2 0-0.3c0-0.6-0.1-1.2-0.1-1.8 -0.1-0.6-0.2-1.3-0.4-1.8 -0.2-0.6-0.5-1.2-0.8-1.7 -0.3-0.5-0.7-1.1-1-1.5 0.5-0.1 1-0.2 1.6-0.2 0.6 0 1.2-0.1 1.8-0.1 0.6 0 1.2-0.1 1.8-0.1C35.4 0 36 0 36.5 0c2.2 0 4.3 0.2 6.4 0.5 2.1 0.3 4.1 0.8 6.1 1.5 2 0.6 3.9 1.4 5.7 2.4 1.8 0.9 3.6 2 5.2 3.2 -0.6 0.4-1.1 0.9-1.6 1.4 -0.5 0.5-0.9 1.1-1.3 1.7 -0.3 0.6-0.7 1.2-1 1.9 -0.3 0.7-0.5 1.4-0.6 2.1 -1.3-1-2.7-1.9-4.2-2.7 -1.5-0.8-3.1-1.4-4.6-2 -1.6-0.5-3.2-0.9-4.9-1.2 -1.7-0.2-3.5-0.4-5.2-0.4 -0.4 0-0.8 0-1.2 0 -0.4 0-0.8 0-1.2 0 -0.4 0-0.8 0-1.1 0.1C32.7 8.5 32.4 8.6 32 8.7z"
                    ></path>
                    <path d="M29.9 18.3c0-1 0.2-1.9 0.6-2.7 0.4-0.8 0.9-1.6 1.5-2.2 0.6-0.6 1.4-1.2 2.2-1.5 0.8-0.4 1.7-0.6 2.7-0.6 1 0 1.9 0.2 2.8 0.6 0.9 0.4 1.6 0.9 2.3 1.5 0.6 0.6 1.1 1.4 1.5 2.2 0.3 0.8 0.5 1.7 0.5 2.7 0 1-0.2 1.9-0.5 2.7 -0.3 0.8-0.8 1.6-1.5 2.2 -0.6 0.6-1.4 1.2-2.3 1.5 -0.9 0.4-1.8 0.6-2.8 0.6 -1 0-1.9-0.2-2.7-0.6 -0.8-0.4-1.6-0.9-2.2-1.5 -0.6-0.6-1.2-1.4-1.5-2.2C30.1 20.2 29.9 19.3 29.9 18.3z"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-4 pt-2">
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5516871008695!2d74.33414575117337!3d31.509004381281926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045d76611691%3A0xaf0ceacf7fd4c706!2sPlot%2023%2C%20Block%20E2%20Block%20E%202%20Gulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1665065490101!5m2!1sen!2s"
              width="100%"
              height="340"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-md-6 mt-2 mt-md-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d210.28784880380232!2d74.5560951!3d32.5099695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eeafa9e9d09a1%3A0xff76f8148bedc716!2sGH54%2BXGJ%2C%20Sadar%20Bazar%20Saddar%20Cantt%20Sialkot%20Cantonment%2C%20Sialkot%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1665069985154!5m2!1sen!2s"
              width="100%"
              height="340"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
