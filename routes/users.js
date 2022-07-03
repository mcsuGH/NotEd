var express = require('express');
var router = express.Router();
const UsersController = require("../controllers/users")

router.get("/", UsersController.Index);
router.post("/create", UsersController.Create);
router.get("/premium/:id", UsersController.Premium);
router.post("/checkout", UsersController.Checkout);

module.exports = router;
