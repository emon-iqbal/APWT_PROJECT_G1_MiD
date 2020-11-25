var db = require('./db');

module.exports =
{
		get: (userid, callback) =>
		{
			var sql = "select * from travelbliss_users where userid=?";
			db.getResults(sql, [userid], (result) =>
			{
				if(result.length > 0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

			});
		},

		getAll: (callback) =>
		{
				var sql = "select * from travelbliss_users";
				db.getResults(sql, (result) =>
				{
						if(result.length > 0)
						{
							callback(result);
						}
						else
						{
							callback([]);
						}

				});
		},


		Trans_Dealer: (callback) =>
		{
				var sql = "select * from travelbliss_users where type='Trans_Dealer'";
				db.getResults(sql, null, (result) =>
				{
					if(result.length > 0)
					{
						console.log('YOU ARE LOGGED IN AS THE TRANSPORT DEALER SUCCESSFULLY !!');
						callback(result);
					}
					else
					{
						callback([]);
					}

				});
		},


		getByUname: (username, callback) =>
		{
				var sql = "select * from travelbliss_users where username=?";
				db.getResults(sql, [username], (results) =>
				{
						if(results.length > 0)
						{
							callback(results[0]);
						}
						else
						{
							callback(null);
						}
				});
		 },


		 validate: (user, callback) =>
		 {
			 var sql = "select * from travelbliss_users where username=? and password=? and type='tp'";
			 db.getResults(sql, [user.username, user.password, user.type], (result) =>
			 {
				 	if(result.length > 0)
					{
						console.log("YOU ARE LOGGED IN ~ TO THE HOME OF ~ TRANSPORT _ DEALER ~ S U C C E S F U L L Y !~_~! ");
						callback(true);
					}
					else
					{
						callback(false);
					}
			 });
		 },

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

		insert: (user, callback) =>
		{
			var sql = "insert into travelbliss_users values(?, ?, ?, ?, ?, ?, ?, ?)";
			db.execute(sql, ['', user.username, user.password, user.email, user.gender, user.education, user.type, user.file], (status) =>
			{
					if(status)
					{
						console.log("R E G I S T R A T I O  N  ~  S U C C E S S F U L  !~_~! ");
						callback(true);
					}
					else
					{
						callback(false);
					}
			});
		}

}
