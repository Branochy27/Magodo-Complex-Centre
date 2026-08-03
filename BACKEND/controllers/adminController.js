const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.json({ message: "Admin login successful", token });
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ lastLogin: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};