const roleMiddleware = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.customer.role)) {
        return res.status(403).send({ error: 'Access denied.' });
      }
      next();
    };
  };
  
  module.exports = roleMiddleware;
  