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
    });

    expect(note.title).toBe("Title");
    expect(note.description).toBe("Description");
  })
})
