const express = require("express");
const app = express();
const router = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/zomato_clone")
  .then((res) => console.log("🚀🚀🚀 Connected to DB"))
  .catch((error) => console.log("Unable to Connect Mongo"));

const PORT = 2000;

app.use(express.json());

app.use(cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log("✨✨✨ Server is connected");
});
