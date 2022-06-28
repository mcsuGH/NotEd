const CalendarEvents = require("../models/calendarEvent.js");

const CalendarController = {
  Index: (req, res) => {
    CalendarEvents.find({userId: req.params.userId})
      .exec((err, events) => {
        if (err) {
          throw err;
        }
        res.json(events);
      });
  },
  Create: (req, res) => {
    const eventInfo = req.body;
    const calendarEvent = new CalendarEvents(eventInfo);
    calendarEvent.save((err) => {
      if (err) {
        throw err;
      }
      res.status(201).send(calendarEvent);
    });
  },

  Delete: (req, res) => {
    CalendarEvents.findByIdAndRemove(req.params.id, function (err, docs) {
      if (err) {
        throw err;
      }
      else res.status(201).send("Event deleted");
    });
  },
};

module.exports = CalendarController;
