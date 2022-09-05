var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('api');
});
router.get('/about', function(req, res, next) {
  res.send('apia');
});

module.exports = router;
