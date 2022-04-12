"use strict";

import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { bodyParser } from "body-parser";

const app = express();
const port = process.env.PORT || 5000;

// env vars
const { PORT, MONGO_URI, CORS_ORIGIN } = process.env;

mongoose.Promise = global.Promise; //can be just Promise
// const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(bodyParser.json(), cors({ origin: CORS_ORIGIN }));

app.use(require("../route/auth-router"));

app.all("*", (req, res) => {
  res.status(404).send({
    message: "Not Found",
  });
});

//error middleware
app.use(require("./error-middleware"));

export const start = () => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

export const stop = () => {
  app.close(() => {
    console.log("Server stopped");
  });
};
