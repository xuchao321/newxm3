var express = require('express');
var router = express.Router();
//111111111111
//222222222222
//00000
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
