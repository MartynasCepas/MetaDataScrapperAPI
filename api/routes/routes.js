"use strict";

module.exports = function (app) {
  var controller = require("../controllers/controller");

  app.route("/tags").get(controller.getData);
};
