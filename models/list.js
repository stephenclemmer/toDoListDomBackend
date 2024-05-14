"use strict";

const mongoose = require("mongoose");

const { Schema } = mongoose;

const listSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const ListModel = mongoose.model("List", listSchema);

module.exports = ListModel;
