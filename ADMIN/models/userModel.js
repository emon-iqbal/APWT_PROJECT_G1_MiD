const db = require('./db');

module.exports = {
	validate: function (user, callback) {
		var sql = "select * from travelbliss_users where username='" + user.uname + "' and password='" + user.password + "'";
		db.getResults(sql, function (results) {
			if (results.length > 0) {

				var i = results[0].type;
				console.log(i);
				callback(i);
			} else {
				callback(false);
			}
		});
	},
	
	getById: function (Sid, callback) {

		var sql = "select * from travelbliss_users";
		db.getResults(sql, function (results) {
			//console.log(results.username);
			callback(results);
		});



	},
	getAll: function (suname, callback) {
		//uname = 'neil';
		var sql = "select * from travelbliss_users";
		db.getResults(sql, function (results) {
			callback(results);
		});
	},
	
	insert: function (newUser, callback) {

		var sql = "INSERT INTO travelbliss_users (username, password, email, gender, education, type) VALUES ( '" + newUser.username + "','" + newUser.password + "','" + newUser.email + "','" + newUser.gender + "', '" + newUser.education + "','" + newUser.type + "')";
		db.execute(sql, function (err) {
			
			if (err) {
				callback(false);
			} else {
				callback(true);
			}

		});
	},

	update: function (Uid, user, callback) {

		var sql = "UPDATE travelbliss_users SET username='" + user.username + "', password='" + user.password + "', email='" + user.email + "' , gender='" + user.gender + "', education='" + user.education + "', type='" + user.type + "' where pid='" + Uid + "'";
		db.execute(sql, function (results) {
			if (results.length > 0) {
				callback(true);
			} else {
				callback(false);
			}

		});

	},

	delete: function (Eid, callback) {

		var sql = "DELETE FROM travelbliss_users WHERE userid='" + Eid + "'";
		db.execute(sql, function (results) {
			if (results.length > 0) {
				callback(true);
			} else {
				callback(false);
			}
		});

	},


}