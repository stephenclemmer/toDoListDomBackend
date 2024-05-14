"use strict";

const express = require("express");
const app = express();
const PORT = 3000;

const router = express.Router();
``;
// CREATE
app.post("/", (req, res, next) => {
  res.send("hello world");
});

// READ
app.get("/", (req, res, next) => {
  res.send("Server Proof of Life");
});

// UPDATE
app.put("/", (req, res, next) => {
  res.send("hello world");
});

// DELETE
app.delete("/", (req, res, next) => {
  res.send("hello world");
});

app.listen(3000);
