const jwt = require("jsonwebtoken");

// Checks that the request has a valid login token
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1]; // "Bearer <token>"
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

// Only lets the admin email through
function adminOnly(req, res, next) {
  if (req.user?.email !== process.env.ADMIN_EMAIL) {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
}

module.exports = { verifyToken, adminOnly };