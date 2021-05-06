const { sign } = require('jsonwebtoken');

module.exports = {
  createAccessToken: (user) => {
    return sign({ id: user.id, email: user.email, role: user.role}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  },
  
  createRefreshToken: (user) => {
    return sign({ id: user.id, email: user.email, role: user.role}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
  },

  isAdmin: (currentUser) => {
    // Check if user is logged in
    if(!currentUser) {
      throw new Error('You must be logged in.');
    }
    // Check if current user is an administrator
    if(currentUser.role !== 'Admin') {
      throw new Error('You must have an Administration role.');
    }
  },

  userLogged: (currentUser) => {
    // Check if user is logged in
    if(!currentUser) {
      throw new Error('You must be logged in.');
    }
  }
}