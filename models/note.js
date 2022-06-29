const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    userId: String,
    hidden: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", NoteSchema);
