var express = require('express');
var router = express.Router();
const NotesController = require("../controllers/notes")

router.get("/", NotesController.Index);
router.post("/create", NotesController.Create);

module.exports = router;
