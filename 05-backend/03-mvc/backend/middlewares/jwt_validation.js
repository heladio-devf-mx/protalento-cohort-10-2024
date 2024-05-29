const jwt = require("jsonwebtoken");

function validateToken(secret) {
  return (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);
    if (!authorization || !authorization.startsWith("Bearer ")) {
      res.sendStatus(400);
      return;
    }
    const token = authorization.slice(7);
    try {
      const payload = jwt.verify(token, secret);
      req.user = payload;

      if(req.user.role !== "admin"){
        res.sendStatus(403);
        return;
      }

      next();
    } catch (error) {
      res.sendStatus(401);
    }
  };
}

module.exports = {
  validateToken,
};
