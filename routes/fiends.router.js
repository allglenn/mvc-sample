const express = require("express");
const router = express.Router();
const { addFriend, listFriends } = require("../controllers/friends.controller");

router.get("/", listFriends);
router.post("/", addFriend);

module.exports = router;