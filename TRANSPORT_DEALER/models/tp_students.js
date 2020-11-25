var db = require('./db');

module.exports ={

	get: function(id, callback){
		var sql = "select * from tp_watch_students where id=?";
		db.getResults(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

	getAll: function(callback){
		var sql = "select * from tp_watch_students";
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

	insert: function(students, callback){
		var sql = "insert into tp_watch_students values(?, ?, ?, ?, ?, ?,?)";

		db.execute(sql, ['', students.sname, students.sschool, students.email, students.gender, students.classs, students.course], function(status){
			if(status){
				console.log("D A T A ~ INSERTED ~ S U C C E S F U L L Y !~_~! ");
				callback(true);
			}else{
				callback(false);
			}
		});
	},

  update: function(students, callback){
var sql = "update tp_watch_students set student_name=?, student_academy=?, email=?, gender=?, class=?, courses=? where id=?";

		db.execute(sql, [students.sname, students.sschool, students.email, students.gender, students.classs, students.course, students.id], function(status){
			if(status){
				console.log("D A T A ~ U P D A T E D ~ S U C C E S F U L L Y !~_~! ");
				callback(true);
			}else{
				callback(false);
			}
		});

	},

	delete: function(id, callback){
		var sql = "delete from tp_watch_students where id=?";
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
