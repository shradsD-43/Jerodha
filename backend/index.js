require("dotenv").config(); //env values go into system process

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { createOrder, getUserOrders } = require("./controllers/OrdersController");
const { Signup } = require("./controllers/SignupAuthController");
const { Login } = require("./controllers/LoginAuthController");
const { userVerification } = require("./middlewares/AuthMiddleware");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_CLIENT_URL, process.env.DASHBOARD_CLIENT_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log("Backend app has started!");
  main()
    .then(() => {
      console.log("DB Connection successful! ");
    })
    .catch((err) => {
      console.log(err);
    });
});
async function main() {
  await mongoose.connect(url);
}

// to get all holdings 
app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

// to get all positions
app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

// to add new order
app.post("/addNewOrder", createOrder);

// to get all orders of a user
app.get("/getAllUserOrder", getUserOrders);

// signup route
app.post("/signup", Signup);

// login route
app.post("/login", Login);

// jwt token in cookie verification 
app.post("/verify", userVerification);

// logout route to remove cookie
app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    secure: true,
    sameSite: "None",
    path: "/",
  });
  res.json({ success: true });
});