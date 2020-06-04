const router = require("express").Router();
const userController = require("../../controllers/userController");


router.route("/login")
.post(userController.getRegister);
  
router.route("/")
.post(userController.getLogin)

module.exports = router;
  

  