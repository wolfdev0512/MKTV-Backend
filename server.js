const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const airdrop = require("./service/airdrop");

dotenv.config();

const users = require("./routes/usersRoute.js");

const MONGODB_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (error) => {
  console.log(error);
});

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

app.use("/", users);

app.listen(PORT, () => {
  // setInterval(async () => {
  //   await airdrop.airdrop();
  // }, 1000);
  setTimeout(async () => {
    await airdrop.airdrop();
  }, 1000);
  console.log("Server started on port", PORT);
});
