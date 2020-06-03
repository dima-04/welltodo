const router = require("express").Router();
const todosRoutes = require('./todo');
const usersRoutes = require("./user");

router.use("/user", usersRoutes);
router.use("/todo", todosRoutes);

module.exports = router;