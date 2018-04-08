var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    success: true,
    message: 'You have requested for books'
  });
});

router.post('/', function(req, res, next) {
  res.send({
    success: true,
    message: `You did try to add ${req.body}`
  });
});

module.exports = router;
