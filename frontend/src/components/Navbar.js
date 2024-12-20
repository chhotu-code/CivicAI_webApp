
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Ensure to import the CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the toggle menu
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/login'); // Redirect to login page
  };

  const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is authenticated

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu on link click
    window.scrollTo(0, 0); // Scroll to top
  };

  return (
    <nav className="navbar">
      <h1>Civic AI</h1>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        &#9776; {/* Hamburger icon */}
      </button>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" onClick={handleLinkClick}>About</Link>
        <Link to="/services" onClick={handleLinkClick}>Services</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile" onClick={handleLinkClick}>Profile</Link>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={handleLinkClick}>Login</Link>
            <Link to="/register" onClick={handleLinkClick}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
