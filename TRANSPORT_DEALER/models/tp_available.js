var db = require('./db');

module.exports ={

	get: function(serial, callback){
		var sql = "select * from provided_tuitions where serial=?";
		db.getResults(sql, [serial], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

	getAll: function(callback){
		var sql = "select * from provided_tuitions";
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

	insert: function(offer, callback){
		var sql = "insert into provided_tuitions values(?, ?, ?, ?, ?, ?)";

		db.execute(sql, ['', offer.tname, offer.sname, offer.class, offer.sub, offer.area], function(status){
			if(status){
				console.log("N E W_D A T A ~ I N S E R T E D ~ S U C C E S F U L L Y !~_~! ");
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	update: function(offer, callback){
var sql = "update provided_tuitions set tutors=?, students=?, s_class=?, courses=?, tuition_area=? where serial=?";

		db.execute(sql, [offer.tname, offer.sname, offer.class, offer.sub, offer.area, offer.serial], function(status){
			if(status){
				console.log("D A T A ~ UPDATED ~ S U C C E S F U L L Y !~_~! ");
				callback(true);
			}else{
				callback(false);
			}
		});

	},

	delete: function(serial, callback){
		var sql = "delete from provided_tuitions where serial=?";
		db.execute(sql, [serial], function(status){
			if(status){
				console.log("D A T A ~ DELETED ~ S U C C E S F U L L Y !~_~! ");
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}
