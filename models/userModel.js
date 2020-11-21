const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from user where uname='"+user.uname+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){

				var i = results[0].type;
				console.log(i);
				callback(i);
			}else{
				callback(false);
			}
		});
	},
	getById: function(Sid, callback){

		var sql = "select * from user where id='"+Sid+"'";
		db.getResults(sql, function(results){
			//console.log(results.username);
				callback(results);
		});



	},
	getAll: function(callback){
		var sql = "select * from user";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(newUser, callback){
		var sql= "INSERT INTO user (eName, cName, cNo, uname, password, type) VALUES ( '"+newUser.eName+"','"+newUser.cName+"','"+newUser.cNo+"','"+newUser.username+"', '"+newUser.password+"','"+newUser.type+"')";
		db.execute(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}

		});
	},

	update:function(Uid, user, callback){


		var sql= "UPDATE user SET eName='"+user.eName+"', cName='"+user.cName+"', cNo='"+user.cNo+"' , uname='"+user.uname+"', password='"+user.password+"', type='"+user.type+"' where id='"+Uid+"'";
		db.execute(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}

	});

},
	delete:function(Eid, callback){

		var sql = "DELETE FROM user WHERE id='"+Eid+"'";
		db.execute(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});

	},
	insertjob: function(newUser, callback){
		var sql= "INSERT INTO joblist (cName, title, location, salary) VALUES ( '"+newUser.cName+"','"+newUser.title+"','"+newUser.location+"','"+newUser.salary+"')";
		db.execute(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}

		});
	},

	getJobById: function(Sid, callback){

		var sql = "select * from joblist where Jid='"+Sid+"'";
		db.getResults(sql, function(results){
			console.log(results.cName);
				callback(results);
		});



	},

	getAlljob: function(callback){
		var sql = "select * from joblist";
		db.getResults(sql, function(results){
			callback(results);
		});	

},

	updateJob:function(Uid, user, callback){


		var sql= "UPDATE joblist SET cName='"+user.cName+"', title='"+user.title+"', location='"+user.location+"' , salary='"+user.salary+"' where Jid='"+Uid+"'";
		db.execute(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}

	});

},

	deleteJob:function(Eid, callback){

		var sql = "DELETE FROM joblist WHERE Jid='"+Eid+"'";
		db.execute(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});

	},

	search: function(key, callback){
		var sql = "SELECT * FROM user WHERE eName LIKE '"+key+"%' AND type!='admin'";
		console.log(sql);
		db.getResults(sql, function(results){

			console.log("dataset length "+results.length);
			if(results.length > 0){
				callback(results);
			}else{
				callback(false);
			}
		});
	},

}

//LIKE ''"+key+"''%' and type !='admin'
