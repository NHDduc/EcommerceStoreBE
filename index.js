const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./Routes/Routes")

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 5000;

//mongodb
console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connection to database"))
  .catch((err) => console.log(err));

//api server
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use(router);

app.listen(PORT, () => console.log("server is running is PORT: " + PORT));
