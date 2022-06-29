const mongoose = require("mongoose");
const Note = require("../../models/note");
require("../mongodb_helper");

describe(Note, () => {
  beforeEach((done) => {
    mongoose.connection.collections.notes.drop(() => {
      done();
    });
  });

  it("has a title, description, date created at", () => {
    const note = new Note({
      title: "Title",
      description: "Description",
      userId: "123",
      hidden: false,
    });

    expect(note.title).toBe("Title");
    expect(note.description).toBe("Description");
    expect(note.userId).toBe("123");
    expect(note.hidden).toBe(false);
  })
})
