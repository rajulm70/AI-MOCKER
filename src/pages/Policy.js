import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={'Privacy & Policy - AI-Mocker'}>
      {/* Privacy & Policy Section */}
      <section className="bsb-about-6 py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Privacy & Policy</h2>
              <p className="text-secondary mb-5 text-center lead fs-4">At AI-Mocker, we prioritize your privacy and security. Our policies are designed to ensure that your personal and sensitive data is handled responsibly while delivering the best user experience.</p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gy-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img className="img-fluid rounded border border-dark" loading="lazy" src="./assets/privacy-img-1.jpg" alt="Privacy Policy" />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-end">
                <div className="col-12 col-xl-11">
                  <div className="accordion accordion-flush" id="accordionAbout6">
                    <div className="accordion-item mb-4 border border-dark">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button bg-transparent fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Data Privacy
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionAbout6">
                        <div className="accordion-body">
                          Your data is treated with the utmost confidentiality. We collect only the necessary information to provide our services, and all data is stored securely, adhering to industry best practices.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-4 border border-dark">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed bg-transparent fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          User Security
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionAbout6">
                        <div className="accordion-body">
                          We implement advanced encryption protocols to ensure that your interactions with AI-Mocker remain safe. Our systems are regularly updated to protect against potential threats.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-4 border border-dark">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed bg-transparent fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Commitment to Transparency
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionAbout6">
                        <div className="accordion-body">
                          At AI-Mocker, we believe in being transparent about how we use your data. Our policies are readily accessible, and we encourage users to reach out with any questions or concerns.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Policy
