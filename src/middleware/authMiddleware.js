const authMiddleware = (req, res, next) => {
    if (req.session.customer) {
      return next();
    }
    return res.status(401).send({ error: 'Unauthorized' });
  };
  
  module.exports = authMiddleware;
  