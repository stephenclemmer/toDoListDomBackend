"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

const router = express.Router();
``;
// CREATE
app.post("/", (req, res, next) => {
  res.send("hello world");
});

// READ ON PAGE LOAD
app.get("/", (req, res, next) => {
  res.status(200).send("Server Proof of Life");
});

// READ
app.get("/", (req, res, next) => {
  res.status(200).send("Server Proof of Life");
});

// UPDATE
app.put("/", (req, res, next) => {
  res.send("hello world");
});

// DELETE
app.delete("/", (req, res, next) => {
  res.send("hello world");
});

app.listen(3001);
