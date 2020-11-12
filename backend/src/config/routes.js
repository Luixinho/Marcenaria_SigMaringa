const express = require('express');

const routes = new express.Router();

routes.get("/", function (req, res) {
    return res.send("Hello World!");
});

module.exports = routes;