import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../style/Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Helmet>
        <title>Home - Admin Panel</title>
        <meta name="description" content="Welcome to the user dashboard." />
      </Helmet>

      <div className="home-box">
        <h2>Welcome to SmartPanel</h2>
        <p>Click below to log in or register and take control.</p>
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => navigate('/login')} className="home-link">
            Go to Login Page
          </button>
          <br />
          <button onClick={() => navigate('/register')} className="home-link">
            Create New User
          </button>
        </div>
      </div>
    </div>
  );
}