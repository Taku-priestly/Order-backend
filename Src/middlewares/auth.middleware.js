const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  if (process.env.AUTH_MODE === 'mock') {
    req.user = { id: 1, role: 'student' };
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    req.user = jwt.verify(
      authHeader.split(' ')[1],
      process.env.JWT_SECRET
    );
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
