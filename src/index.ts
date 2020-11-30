import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import * as bodyParser from "body-parser";
import annotationRouter from "./annotations";
import questionRouter from "./questions";

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use("/annotations", annotationRouter);
app.use("/questions", questionRouter);

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to Database");
});
