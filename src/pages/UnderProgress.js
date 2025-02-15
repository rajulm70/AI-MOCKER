import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

export default function UnderProgress() {
  return (
    <Layout title={'UnderProgress'}>
        <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>This Feature is Under Progress</h1>
        <p style={styles.message}>
          We are working hard to bring this feature to you! Stay tuned.
        </p>
        <Link to="/" style={styles.link}>
          <button style={styles.button}>Go Back to Dashboard</button>
        </Link>
      </div>
    </div>
    </Layout>
    
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff',
  },
  card: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ff6347',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '30px',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#ff6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
