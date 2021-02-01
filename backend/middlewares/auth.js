const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req ? req.get('Authorization') : null;
  const isBearer = authHeader === null 
    ? authHeader.toLowerCase().startsWith('bearer ') 
    : false;

  if (!authHeader || !isBearer) {
    req.isAuth = false;
    return next();
  }

  let decodedToken;

  try {
    const token = authHeader.substring(7);
    decodedToken = jwt.verify(token , JWT_SECRET);    
  } catch (error) {
    req.isAuth = false;
    next();
  }

  req.isAuth = true;
  req.userId = decodedToken.userId;
  next();
}