import React from "react";
import Layout from "./../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout title={'Contact Us - AI-Mocker'}>
      {/* Contact Us - AI-Mocker */}
      <section className="py-3 py-md-5">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img className="img-fluid rounded" loading="lazy" src="./assets/about-img-1.webp" alt="Contact Us" />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-10">
                  <h2 className="mb-3">Reach Out to AI-Mocker</h2>
                  <p className="lead fs-4 mb-3 mb-xl-5">Have questions or need assistance with our AI-powered tools? Our team is here to help you make the most of AI-Mocker. Feel free to get in touch with us for any inquiries or support!</p>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div>
                      <i className="fa-solid fa-envelope-circle-check"></i>
                      <a href="mailto:rajulm70@gmail.com" className="fs-5 text-dark m-2 contactus">rajulm70@gmail.com</a>
                      <i className="fa-solid fa-hand-point-left"></i>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div>
                      <i className="fa-solid fa-mobile-screen"></i>
                      <a href="tel:+1234567890" className="fs-5 text-dark m-2 contactus">+1 234 567 890</a>
                      <i className="fa-solid fa-hand-point-left"></i>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div>
                      <i className="fa-solid fa-phone-volume"></i>
                      <a href="tel:+18001234567" className="fs-5 text-dark m-2 contactus">Toll-Free: +1 800 123 4567</a>
                      <i className="fa-solid fa-hand-point-left"></i>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
