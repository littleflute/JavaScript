const tag="[routes/index.js_v0.15]";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var o = {
    title: tag + "-Title",
    link1: "<a href='users'>users</a>",
    content: "test",
    date: Date()

  };
  res.render('index', o);
});

module.exports = router;
