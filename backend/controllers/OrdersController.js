const {OrdersModel} = require("../models/OrdersModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.createOrder = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const order = await OrdersModel.create({
      userId: decoded.id,
      name: req.body.name,
      qty: Number(req.body.qty),
      price: Number(req.body.price),
      mode: req.body.mode,
    });

    res
      .status(201)
      .json({ success: true, message: "Order added successfully!" });
  } catch (err) {
    console.error("CREATE ORDER ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

module.exports.getUserOrders = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const orders = await OrdersModel.find({ userId: decoded.id });
    res.json(orders);
  } catch (err) {
    console.error("CREATE ORDER ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};
