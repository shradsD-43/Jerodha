const { UsersModel } = require("../models/UsersModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ status: false, message: "No token" });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({
        status: false,
        message: "Invalid or expired token",
      });
    } else {
      try {
        const user = await UsersModel.findById(data.id);
        if (user) return res.json({ status: true, user: user.username });
        else
          return res
            .status(401)
            .json({ status: false, message: "User not found" });
      } catch (err) {
        return res.status(500).json({
          status: false,
          message: "Database error",
        });
      }
    }
  });
};
