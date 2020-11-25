var db = require('./db');

module.exports ={

	get: function(id, callback)
	{
			var sql = "select * from student_schedule where id=?";
			db.getResults(sql, [id], function(result)
			{
				if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

	getAll: function(callback){
		var sql = "select * from student_schedule";
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

	insert: function(s_sch, callback)
	{
		var sql = "insert into student_schedule values(?, ?, ?, ?)";

		db.execute(sql, ['', s_sch.name, s_sch.day, s_sch.time], function(status)
		{
			if(status)
			{
				console.log("NEW_SCHEDULE ~ inserted ~ S U C C E S F U L L Y !~_~! ");
				callback(true);
			}
			else
			{
				callback(false);
			}
		});

	},

  update: function(s_sch, callback){
var sql = "update student_schedule set NAME=?, DAY=?, TIME=? where id=?";

		db.execute(sql, [s_sch.name, s_sch.day, s_sch.time, s_sch.id], function(status){
			if(status){
				console.log("D A T A ~ U P D A T E D ~ S U C C E S F U L L Y !~_~! ");
				callback(true);
			}else{
				callback(false);
			}
		});

	},

	delete: function(id, callback){
		var sql = "delete from student_schedule where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				console.log("D A T A ~ DELETED ~ S U C C E S F U L L Y !~_~! ");
				callback(true);
			}else{
				callback(false);
			}
		});
	}


}
