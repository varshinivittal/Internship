var express = require('express');
var router = express.Router();
var selectdb = require('./selectdb');
var response = {};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.post('/', function(req, res, next) {
	//var name = req.body.name;
	console.log(req.body);
	response = res;
	selectdb(cb);  
});

function cb(err, result) {
	if(err)
		return response.sendStatus(500);
	else
		return response.send(result);
}

module.exports = router;
