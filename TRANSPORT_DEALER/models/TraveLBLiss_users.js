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

		admin: (callback) =>
		{
				var sql = "select * from travelbliss_users where type='admin'";
				db.getResults(sql, null, (result) =>
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

		HotelManager: (callback) =>
		{
				var sql = "select * from travelbliss_users where type='HotelManager'";
				db.getResults(sql, null, (result) =>
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
						console.log('YOU ARE LOGGED IN AS THE  -> TRANSPORT DEALER <-  OF THIS MVC TRAVELBLISS APP SUCCESSFULLY !!');
						callback(result);
					}
					else
					{
						callback([]);
					}

				});
		},

		traveler: (callback) =>
		{
				var sql = "select * from travelbliss_users where type='traveler'";
				db.getResults(sql, null, (result) =>
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


		getByUname: (username, callback) =>
		{
				var sql = "select * from travelbliss_users where username=?";
				db.getResults(sql, [username], (results) =>
				{
						if(results.length > 0)
						{
							console.log('USERNAME FOUND in DataBase');
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
			 var sql = "select * from travelbliss_users where username=? and password=? and type='Trans_Dealer'";
			 db.getResults(sql, [user.username, user.password, user.type], (result) =>
			 {
				 	if(result.length > 0)
					{
						console.log("YOU ARE LOGGED IN ~ TO THE HOME OF ~ TRANSPORT_DEALER ~ S U C C E S F U L L Y !~_~! ");
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
						console.log("N E W ~ D A T A ~ I N S E R T E D ~ S U C C E S F U L L Y !~_~! ");
						callback(true);
					}
					else
					{
						callback(false);
					}
			});
		},

		update: (user, callback) =>
		{
				var sql = "update travelbliss_users set username=?, password=?, email=?, gender=?, education=?, type=? where userid=?";
				db.execute(sql, [user.username, user.password, user.email, user.gender, user.education, user.type, user.userid], (status) =>
				{
						if(status)
						{
							console.log( " D A T A ~ U P D A T E D ~ S U C C E S F U L L Y !~_~! " );
							callback(true);
						}
						else
						{
							callback(false);
						}
				});
		},


		delete: (userid, callback) =>
		{
				var sql = "delete from travelbliss_users where userid=?";
				db.execute(sql, [userid], (status) =>
				{
						if(status)
						{
							console.log("D A T A ~ D E L E T E D  !! ");
							callback(true);
						}
						else
						{
							callback(false);
						}
				});
			}

}
