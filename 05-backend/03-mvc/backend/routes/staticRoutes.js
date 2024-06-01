const express = require("express");

const staticRoutes = express.Router();

staticRoutes.get("/about", (req, res) => {
  res.send("About Page");
});

module.exports = staticRoutes