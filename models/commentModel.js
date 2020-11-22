const db = require('./db');

module.exports = {
	
	getById: function (Sid, callback) {

		var sql = "select * from comment where cid='" + Sid + "'";
		db.getResults(sql, function (results) {
			//console.log(results.username);
			callback(results);
		});



	},
	getAll: function (callback) {
		//uname = 'neil';
		var sql = "select * from comment";
		db.getResults(sql, function (results) {
			callback(results);
		});
	},
	

	update: function (i, cResponse, callback) {

		console.log(cResponse);

        var sql = "UPDATE comment SET cresponse='" + cResponse + "' where cid='" + i + "'";
        console.log(sql);
		db.execute(sql, function (results) {
			if (results.length > 0) {
				callback(true);
			} else {
				callback(false);
			}

		});

	},
	delete: function (Eid, callback) {

		var sql = "DELETE FROM comment WHERE cid='" + Eid + "'";
		db.execute(sql, function (results) {
			if (results.length > 0) {
				callback(true);
			} else {
				callback(false);
			}
		});

	},
}