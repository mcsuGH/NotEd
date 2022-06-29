var express = require('express');
var router = express.Router();
const NotesController = require("../controllers/notes")

router.get("/:userId", NotesController.Index);
router.post("/create", NotesController.Create);
router.post("/update/:id", NotesController.Update);

module.exports = router;
