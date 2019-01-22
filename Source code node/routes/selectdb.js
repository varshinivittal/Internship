var mysql = require('mysql');

function selectdb(cb) {
	var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "customer"
});
	con.connect(function(err) {
	  	if (err) cb(err);
	   	//Select Query
		con.query("SELECT * FROM customers", function (err, result, fields) {
	  		if (err) {
	  			return cb(err);
	  		}
	    	console.log(result);  	
	    	cb(null, result);
	  	});
	  });	
}

module.exports = selectdb;