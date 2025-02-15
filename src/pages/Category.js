import React, { useRef } from 'react';
import Layout from '../components/Layout/Layout';
import { useAuth } from "../context/auth";
import MockInt from './MockInt';
import MockEssay from './MockEssay';
import MockQuizzy from './MockQuiz';
import './Dashboard.css';

const Category = () => {
  const [auth, setAuth] = useAuth();

  // Create a ref for the dashboard container
  const dashboardRef = useRef(null);

  return (
    <Layout title={'Category'}>
      <div ref={dashboardRef} className="dashboard-container">
        <MockQuizzy />
        <MockEssay />
        <MockInt />
      </div>
    </Layout>
  );
};

export default Category;
