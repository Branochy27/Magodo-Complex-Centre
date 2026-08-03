const express = require("express");
const router = express.Router();
const { adminLogin, getAllUsers } = require("../controllers/adminController");
const { verifyToken, adminOnly } = require("../middleware/auth");

router.post("/login", adminLogin);
router.get("/users", verifyToken, adminOnly, getAllUsers);

module.exports = router;