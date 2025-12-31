require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const { HoldingsModel } = require("./model/HoldingsModel.js");
const { OrdersModel } = require("./model/OrdersModel.js");
const { PositionsModel } = require("./model/PositionsModel");
const { WatchlistModel } = require("./model/WatchlistModel");

const authRoute = require("./routes/AuthRoute");

const app = express();
app.set("trust proxy", 1);

/* =======================
   ✅ MIDDLEWARES (ORDER IMPORTANT)
======================= */
app.use(cors({
  origin: [ "https://zerodha-project-1-tcmc.onrender.com","http://localhost:3000","http://localhost:3001","*"],
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true
}));


app.use(express.json()); // 🔥 MOST IMPORTANT
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

/* =======================
   ✅ AUTH ROUTES
======================= */
app.use("/", authRoute);

/* =======================
   ✅ API ROUTES
======================= */
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  const allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.get("/allWatchlist", async (req, res) => {
  const allWatchlist = await WatchlistModel.find({});
  res.json(allWatchlist);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode
  });
  await newOrder.save();
  res.send("Order Saved !");
});

/* =======================
   ✅ SERVER + DB
======================= */
app.listen(PORT, async () => {
  console.log(`App Listening on Port ${PORT}`);
  await mongoose.connect(url);
  console.log("Connected to DB !");
});