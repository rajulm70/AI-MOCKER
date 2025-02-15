import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center">
            <div className=" p-4 " style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                <section className="mb-1">
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#2d4373' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#4a90e2' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#c23321' }}
                        href="https://www.google.com/"
                        role="button"
                    >
                        <i className="fab fa-google"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#8a3ab9' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#006192' }}
                        href="https://www.linkedin.com/in/rajul-mishra-35469b257"
                        role="button"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#1a1a1a' }}
                        href="https://github.com/rajulm70"
                        role="button"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </section>
            </div>

            <div  style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }} className=''>
                <Link to = '/about' className='m-1 footer-links'><i class="fa-solid fa-circle-info"></i> About us</Link>|
                <Link to = '/contact' className='m-1 footer-links'><i class="fa-solid fa-address-book"></i> contact us</Link>|
                <Link to = '/policy' className='m-1 footer-links'><i class="fa-solid fa-user-lock"></i> Policies</Link>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>
                © 2024 Copyright : ai-mocker.vercel.app
            </div>
            
        </footer>
    );
};

export default Footer;
