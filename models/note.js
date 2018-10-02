'use strict';

var mongoose = require("mongoose"),
      Schema   = mongoose.Schema;

var NoteSchema = new Schema({
  comment: {
    type: String
  },
});

module.exports = mongoose.model("Comment", NoteSchema);