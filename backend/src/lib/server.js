"use strict";

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

const app = express();

// env vars
// const { PORT, MONGO_URI, CORS_ORIGINS } = process.env;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/blog";
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.Promise = global.Promise; //can be just Promise
// const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const blogRouter = require("../routes/blog.route");

app.use("/blog", blogRouter);

// app.use(require("../route/auth-router"));

app.all("*", (req, res) => {
  res.status(404).send({
    message: "Not Found",
  });
});

//error middleware
// app.use(require("./error-middleware"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
