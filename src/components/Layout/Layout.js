import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet';
import { Toaster } from 'react-hot-toast';

const Layout = ({children, title, description, keywords, author}) => {
  return (
    <div>
        <Helmet>
            <meta charSet='utf-8'/>
            <meta name='description'content={description}/>
            <meta name='keywords'content={keywords}/>
            <meta name='author'content={author}/>
            <title>{title}</title>
        </Helmet>
        <Header />
        <main style={{minHeight:'70vh'}}>
        <Toaster />
            {children}
        </main>
        
        <Footer />
    </div>
  )
}

Layout.defaultProps = {
    title: "ShopSphere - Your Ultimate Shopping Destination",
    description: "Discover a wide range of products with amazing offers on ShopSphere. Built with the MERN stack for a seamless shopping experience.",
    keywords: "ShopSphere, e-commerce, shopping, deals, MERN, React, Node, MongoDB",
    author: "rajulm70",
}

export default Layout