import bodyParser from "body-parser";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import postRoutes from "./src/routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/blog", postRoutes);
const CONNECTION_URL =
  process.env.MONGO_URI || "mongodb://localhost:27017/blog";
const PORT = process.env.PORT || 27017;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(
      PORT,
      () => console.log(`Server started on port ${PORT}`),
      console.log(`Server started on port ${PORT}`)
    )
  )
  .catch((err) => console.error(err));

//Connected tot MongoDB, yet?
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
