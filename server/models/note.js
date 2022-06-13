const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    date: String,
  }
);

module.exports = mongoose.model("Note", NoteSchema);
