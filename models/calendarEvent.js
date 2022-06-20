const mongoose = require("mongoose");

const CalendarEventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    day: String,
    month: String,
    year: String,
    label: String
  }
);

module.exports = mongoose.model("CalendarEvent", CalendarEventSchema);
