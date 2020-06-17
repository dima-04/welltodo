const db = require("../models");

module.exports = {

  getTodo: function (req, res) {
    db.Todos
      .find({ userId: req.query.userId })
      .then(dbTodos => res.json(dbTodos))
      .catch(err => res.status(422).json(err));
  },
  creatTodo: function (req, res) {
    db.Todos
      .create(req.body)
      .then(dbTodosModel => res.json(dbTodosModel))
      .catch(err => res.status(422).json(err));
  },
  deleteTodo: function (req, res) {
    db.Todos
      .findById({ _id: req.params.id })
      .then(dbTodosModel => dbTodosModel.remove())
      .then(dbTodosModel => res.json(dbTodosModel))
      .catch(err => res.status(422).json(err));
  },

  editTodo: function (req, res) {
    db.Todos
    .findById({ _id: req.params.id })
      .then(dbTodosModel => res.json(dbTodosModel))
      .catch(err => res.status(422).json(err));
  }
};

