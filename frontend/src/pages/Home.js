// src/pages/Home.js
import React from 'react';
import './Home.css'; // Ensure to import the CSS file
import civicImage from './images/civic-engagement.png'; // Update with your actual image paths

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Civic AI</h1>
      <p>
        CIVIC AI is your go-to platform for reporting civic issues. Engage with your community and help us improve public services.
      </p>
      <div className="features">
        <div className="feature-item">
          <img src={civicImage} alt="Feature 1" className="feature-image" />
          <h2>Report Issues</h2>
          <p>Easily capture and report civic issues in your locality.</p>
        </div>
        <div className="feature-item">
          <img src={civicImage} alt="Feature 2" className="feature-image" />
          <h2>Track Progress</h2>
          <p>Stay updated on the status of your reported issues.</p>
        </div>
        <div className="feature-item">
          <img src={civicImage} alt="Feature 3" className="feature-image" />
          <h2>Community Engagement</h2>
          <p>Join hands with your neighbors to create a better community.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
