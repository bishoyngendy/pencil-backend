import express from "express";
import mongoose from "mongoose";

import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();
const port = 8080;

// // define a route handler for the default home page
app.get("/", (req, res) => {
  // render the index template
  res.send("testing");
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to db");
});
