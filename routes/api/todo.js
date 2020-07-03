const router = require("express").Router();
const todoController = require("../../controllers/todoController");

router.route("/")
    .get(todoController.getTodo)

    router.route("/:id")
    .get(todoController.getTodo)

    router.route("/")
    .post(todoController.creatTodo)

     router.route("/:id")
    .delete(todoController.deleteTodo)

    router.route("/:id")
    .patch(todoController.markDone);

    module.exports = router;