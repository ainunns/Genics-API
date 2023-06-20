const router = require("express").Router();
const {
  getUsers,
  saveUser,
  deleteUser,
} = require("../controllers/usersController");

router.get("/", getUsers);
router.post("/", saveUser);
router.delete("/:_id", deleteUser);

module.exports = router;
