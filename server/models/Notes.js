const mongoose = require("mongoose");
const { Schema } = mongoose;
// make a schema called notes
const NotesSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required : [true, "user id must be required"]
  },
  title: {
    type: String,
    required: [true, "Value Must be required"],
    minlength: 10, 
    maxlength: 500
  },
  description: {
    type: String,
    required: [true, "Value Must be required"],
    minlength: 15
  },
  tag: {
    type: String,
    default: "general",
  },

} , {timestamps: true});

module.exports = mongoose.model("notes", NotesSchema);
