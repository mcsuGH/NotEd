var express = require('express');
var router = express.Router();
const NotesController = require("../controllers/notes")

router.get("/", notesController.Index);
router.post("/create", notesController.Create);

module.exports = router;
