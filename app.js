import express from "express";
import router from "./api/employees.js";
const app = express();

// TODO: this file!
app.use(express.json());

app.route("/").get((req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});

app.use("/employees", router);

app.use((errorMonitor, req, res, next) => {
  console.error(errorMonitor.stack);
  res.status(500).send("Something went wrong!");
});

export default app;
