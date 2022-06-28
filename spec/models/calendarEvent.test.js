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
      date: "DD-MM-YYYY",
      label: "label",
      userId: "123",
    });

    expect(calendarEvent.title).toBe("Title");
    expect(calendarEvent.description).toBe("Description");
    expect(calendarEvent.date).toBe("DD-MM-YYYY")
    expect(calendarEvent.label).toBe("label");
    expect(calendarEvent.userId).toBe("123");
  })
})
