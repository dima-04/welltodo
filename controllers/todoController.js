

module.exports = {

  getTodo: function (req, res) {
    // db.Todos
    // .find({userId: req.query.userId})
    // .then(dbTodos => res.json(dbTodos))
    // .catch(err => res.status(422).json(err));
    res.send("Hello")
  },
  creatTodo: function (req, res) {
    //     db.Todos
    //     .create(req.body)
    //     .then(dbTodosModel => res.json(dbTodosModel))
    //     .catch(err => res.status(422).json(err));
    res.send("please")

  },
  deleteTodo: function (req, res) {
    // //     db.Todos
    // //       .findById({ _id: req.params.id })
    // //       .then(dbTodosModel => dbTodosModel.remove())
    // //       .then(dbTodosModel => res.json(dbTodosModel))
    // //       .catch(err => res.status(422).json(err));
    res.send("Bye")
  },

  editTodo: function (req, res) {

    res.send("diaaaamaaa")
  }
};

