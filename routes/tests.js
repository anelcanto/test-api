var express = require('express');
var router = express.Router();

/* GET test listing. */
router.get('/', function(req, res, next) {
  res.send('Test API is working properly');
});

module.exports = router;
