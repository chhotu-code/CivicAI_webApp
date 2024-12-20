// src/pages/Profile.js
import React from 'react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('registeredUser')); // Fetch the logged-in user's data

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* You can add more user information here */}
        </div>
      ) : (
        <p>No user data found. Please log in again.</p>
      )}
    </div>
  );
};

export default Profile;
