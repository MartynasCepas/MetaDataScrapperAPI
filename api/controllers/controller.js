"use strict";

const { htmlToText } = require("html-to-text");
const urlMetadata = require("url-metadata");
const getUrls = require("get-urls");

var o = {}; // empty Object
var key1 = "title";
var key2 = "description";
var key3 = "image";

o[key1] = "";
o[key2] = "";
o[key3] = "";

exports.getData = function (req, res) {
  var urls = getUrls(req.headers.requestedurl);
  var it = urls.values();
  var first = it.next();
  var url = first.value;

  urlMetadata(url).then(
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

exports.getTextFromHtml = function (req, res) {
  console.log(req.body.content_html);
  const text = htmlToText(req.body.content_html);
  console.log(text);
  res.send("working");
};
