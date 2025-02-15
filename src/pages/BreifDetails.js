import React from "react";
import "./BriefDetails.css";
import Layout from "../components/Layout/Layout";

const BriefDetails = () => {
    const categories = [
        {
            title: "AI-Powered Mock Interview",
            description:
                "Prepare for your interviews like a pro with our AI-Driven Mock Interview platform. It simulates real-world interview scenarios, providing personalized questions based on your chosen domain and instant feedback on your answers to help you improve.",
            icon: "fa-solid fa-user-tie", // Example icon from FontAwesome
        },
        {
            title: "AI-Powered Essay Writing",
            description:
                "Craft compelling essays effortlessly with our AI-Essay Writing tool. It generates creative and well-structured content on your chosen topics and provides real-time grammar and style suggestions to enhance your writing skills.",
            icon: "fa-solid fa-book-open", // Example icon from FontAwesome
        },
        {
            title: "AI-Powered Quiz Platform",
            description:
                "Test your knowledge with our AI-Quiz platform. Choose from various topics, and our AI generates quizzes tailored to your preferences. Analyze your performance with detailed insights and improve in areas that need attention.",
            icon: "fa-solid fa-brain", // Example icon from FontAwesome
        },
    ];

    return (
        <Layout title={'Learn More - AI-Mocker'}>
            <section className="brief-details-section">
                <div className="container">
                    <h2 className="section-title text-center">Explore Our Features</h2>
                    <p className="section-subtitle text-center">
                        Dive into AI-Mocker's smart solutions designed to elevate your learning and preparation experience.
                    </p>
                    <div className="row">
                        {categories.map((category, index) => (
                            <div className="col-12 col-md-4 mb-4" key={index}>
                                <div className="category-card">
                                    <div className="icon-container">
                                        <i className={`${category.icon} category-icon`}></i>
                                    </div>
                                    <h3 className="category-title">{category.title}</h3>
                                    <p className="category-description">{category.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>

    );
};

export default BriefDetails;
