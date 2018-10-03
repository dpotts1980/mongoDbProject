'use strict';

var mongoose = require("mongoose"),
      Schema   = mongoose.Schema;

var NoteSchema = new Schema({
  note: {
    type: String
  },
});

module.exports = mongoose.model("Note", NoteSchema);