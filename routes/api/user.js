const express = require("express");
const router = express.Router();


// const user = require("../../models/user");

router.post("/login", (req, res) => {
   res.send("hello")
  });
  
  router.post("/singup", (req, res) => {
    res.send("hello")
  });
  
  module.exports = router;
  