const express = require('express');
const bcrypt = require('bcrypt'); 
const User = require('../models/User'); 

const router = express.Router(); 

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body; 
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' }); 
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error); 
    res.status(500).json({ message: 'Internal server error' }); 
  }
});

module.exports = router; 
