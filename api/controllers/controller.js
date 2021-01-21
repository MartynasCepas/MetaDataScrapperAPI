"use strict";

const urlMetadata = require("url-metadata");

var o = {}; // empty Object
var key1 = "title";
var key2 = "description";
var key3 = "image";

o[key1] = "";
o[key2] = "";
o[key3] = "";

exports.getData = function (req, res) {
  urlMetadata(req.headers.requestedurl).then(
    function (metadata) {
      // success handler
      o[key1] = metadata["og:title"];
      o[key2] = metadata["og:description"];
      o[key3] = metadata["og:image"];
      res.send(JSON.stringify(o));
    },
    function (error) {
      // failure handler
      res.send(error);
    }
  );
};

// we need og:image, og:title, og:description
