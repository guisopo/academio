const jwt = require('jsonwebtoken');

// Get the user info from JWT
module.exports = auth = (token, secretKey) => {
  // Verify that token exist and that starts with bearer
  if(token && token.toLowerCase().startsWith('bearer ')) {
    try {
      // Return token without bearer keyword and verify it
      return jwt.verify(token.substring(7), secretKey);
    } catch(error) {
      throw new Error('Session invalid');
    }
  }
}