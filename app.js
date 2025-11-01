import express, { Router } from "express";
const app = express();
import router from "#api/employees";
export default app;

// TODO: this file!
app.use(express.json());

// route to employee route //
app.use("/", router);

//Error//
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, something went wrong");
});
