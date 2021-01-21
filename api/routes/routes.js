"use strict";

module.exports = function (app) {
  var controller = require("../controllers/controller");

  app.route("/api/tags").get(controller.getData);
};
