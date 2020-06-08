const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require('../config/keys');
const User = require("../models/User");

module.exports = {

    signup: function (req, res) {
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(400).json({ email: "Email already exists" });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
                // Hash password before saving in database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                const payload = {
                                    id: user.id,
                                    name: user.name
                                };
                                // Sign token
                                jwt.sign(
                                    payload,
                                    keys.secretOrKey,
                                    {
                                        expiresIn: 31556926
                                    },
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            token: "Bearer " + token
                                        });
                                    }
                                );
                            })
                            .catch(err => res.status(500).send(err));
                    });
                });
            }
        })
    },
    login: function (req, res) {
        const email = req.body.email;
        const password = req.body.password;
        User.findOne({ email }).then(user => {
            if (!user) {
                return res.status(404).send("Incorrect email or password.");
            }
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    // Create JWT Payload
                    const payload = {
                        id: user.id,
                        name: user.name
                    };
                    // Sign token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn: 31556926
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                    );
                } else {
                    return res
                        .status(400)
                        .send("Incorrect email or password.");
                }
            })
        })
    }
};

