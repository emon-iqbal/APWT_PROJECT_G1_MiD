var db = require('./db');

module.exports ={

	get: function(id, callback){
		var sql = "select * from tp_watch_tutor where id=?";
		db.getResults(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

	getAll: function(callback){
		var sql = "select * from tp_watch_tutor";
		db.getResults(sql, null, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},

getByUname: function(username, callback){
		var sql = "select * from user where username='"+username+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},


	validate: function(user, callback){
		var sql = "select * from user where username='"+user.uname+"' and password='"+user.password+"' and type='tp'";
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	insert: function(teacher, callback){
		var sql = "insert into tp_watch_tutor values(?, ?, ?, ?, ?, ?)";

		db.execute(sql, ['', teacher.tname, teacher.email, teacher.gender, teacher.education, teacher.provide], function(status){
			if(status){
				console.log("N E W_D A T A ~ I N S E R T E D ~ S U C C E S F U L L Y !~_~! ");
				callback(true);
			}else{
				callback(false);
			}
		});
	}


}
