const express = require("express");
const multer = require("multer");
const routes = new express.Router();

const upload = multer();

routes.get("/", function (req, res) {
  return res.status(401).json({});
});

routes.post("/post", upload.single("imagem"), function (req, res) {
  const results = req.body;

  return res.json({ message: "ok" });
});

module.exports = routes;
