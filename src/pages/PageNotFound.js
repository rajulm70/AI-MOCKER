import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Layout title={'Go Back!'}>
      <div style={styles.container} className='PNF-class'>
        <h1 style={styles.errorText}><i class="fa-regular fa-face-frown"></i> 404</h1>
        <p style={styles.message} className='m1-2 '>Oops! The page you're looking for doesn't exist.</p>
        <Link to='/' className='pnf-btn'>
        Go to home
        </Link>
          
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '100px 20px',
    color: '#333',
  },
  errorText: {
    fontSize: '120px',
    fontWeight: 'bold',
    animation: 'bounce 1.5s infinite', // Apply the bounce animation
  },
  message: {
    fontSize: '24px',
    marginTop: '-20px',
    color: '#666',
  }
};

// Adding CSS for animation inside the component
const bounceAnimation = `
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
`;

// Inject CSS keyframes animation into the document's head
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(bounceAnimation, styleSheet.cssRules.length);

export default PageNotFound;
