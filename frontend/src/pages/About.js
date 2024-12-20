
import React from 'react';
import './About.css'; // Ensure to import the CSS
import civicImage from './images/civic-engagement.png'; // Your civic engagement image
import anotherImage from './images/another-image.png'; // Your second image

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-description">
        CIVIC AI is a cutting-edge platform that bridges the gap between citizens and government authorities, streamlining the reporting and resolution of civic issues. Through the app and website, citizens can easily capture photos, geo-tag locations, and report problems such as road damage, water leakage, waste, and more. Authorities receive instant alerts, enabling them to address and resolve issues within 3 days. Powered by AI and cloud technology, CIVIC AI fosters smarter cities by improving public safety, resource management, and community engagement.
      </p>
      <div className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To create a seamless communication channel between citizens and local authorities, fostering a community where issues are resolved swiftly and efficiently.
          </p>
          <img src={civicImage} alt="Civic Engagement" className="about-image" />
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            A world where every citizen has the power to report issues easily, contributing to safer and better communities.
          </p>
          <img src={anotherImage} alt="Community Empowerment" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
