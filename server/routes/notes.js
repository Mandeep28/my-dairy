// external packages
const express = require("express");

const {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  getSingleNote,
} = require("../controller/notes");

// code start
const router = express.Router();

router.route("/").get(getAllNotes).post(createNote);

router.route("/:id").get(getSingleNote).put(updateNote).delete(deleteNote);

module.exports = router;
