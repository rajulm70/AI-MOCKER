import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
    return (
        <Layout title={'About us - AI-Mocker'}>
            {/* About AI-Mocker */}
            <section className="py-3 py-md-5 py-xl-8 about-class">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 col-lg-8">
                            <h3 className="fs-5 mb-2 text-secondary text-uppercase">About</h3>
                            <h2 className="display-5 mb-4">Empowering individuals with AI-driven tools for learning and self-improvement.</h2>
                            <button type="button" className="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="container overflow-hidden">
                    <div className="row gy-4 gy-lg-0">
                        <div className="col-12 col-lg-6">
                            <article>
                                <div className="card border-0">
                                    <img className="card-img-top img-fluid m-0" loading="lazy" src="./assets/about-img-1.jpg" alt="Our Mission" />
                                    <div className="card-body border bg-white p-4">
                                        <div className="entry-header mb-3">
                                            <h2 className="card-title entry-title h4 mb-0">
                                                <a className="link-dark text-decoration-none" href="#!">Our Mission</a>
                                            </h2>
                                        </div>
                                        <p className="card-text entry-summary text-secondary mb-3">At AI-Mocker, our mission is to revolutionize learning and skill development through AI-powered tools. We aim to provide a platform that helps users practice interviews, improve writing, and test their knowledge in an interactive and efficient way.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-12 col-lg-6">
                            <article>
                                <div className="card border-0">
                                    <img className="card-img-top img-fluid m-0" loading="lazy" src="./assets/about-img-2.jpg" alt="Our Vision" />
                                    <div className="card-body border bg-white p-4">
                                        <div className="entry-header mb-3">
                                            <h2 className="card-title entry-title h4 mb-0">
                                                <a className="link-dark text-decoration-none" href="#!">Our Vision</a>
                                            </h2>
                                        </div>
                                        <p className="card-text entry-summary text-secondary mb-3">We envision a future where AI-Mocker becomes the go-to platform for students and professionals seeking to enhance their skills and prepare for real-world challenges, using cutting-edge AI technology to make learning personalized, accessible, and engaging.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About
