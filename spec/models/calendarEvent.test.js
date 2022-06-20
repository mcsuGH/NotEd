const mongoose = require("mongoose");
const CalendarEvent = require("../../models/calendarEvent");
require("../mongodb_helper");

describe(CalendarEvent, () => {
  beforeEach((done) => {
    mongoose.connection.collections.calendarevents.drop(() => {
      done();
    });
  });

  it("has a title, description, day, month, year, label", () => {
    const calendarEvent = new CalendarEvent({
      title: "Title",
      description: "Description",
      day: "DD",
      month: "MM",
      year: "YY",
      label: "label"
    });

    expect(calendarEvent.title).toBe("Title");
    expect(calendarEvent.description).toBe("Description");
    expect(calendarEvent.day).toBe("DD");
    expect(calendarEvent.month).toBe("MM");
    expect(calendarEvent.year).toBe("YY");
    expect(calendarEvent.label).toBe("label");
  })
})
