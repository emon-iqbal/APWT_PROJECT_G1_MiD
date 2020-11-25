var db = require('./db');

module.exports =
{
		get: (userid, callback) =>
		{
			var sql = "select `userid`, `username`, `password`, `email`, `gender`, `education`, `type` from travelbliss_users where userid=?";
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


		update: (user, callback) =>
		{
				var sql = "update travelbliss_users set username=?, password=?, email=?, gender=?, education=?, type=? where userid=?";
				db.execute(sql, [user.username, user.password, user.email, user.gender, user.education, user.type, user.userid], (status) =>
				{
						if(status)
						{
							console.log("D A T A ~ U P D A T E D ~ S U C C E S F U L L Y !~_~! ");
							callback(true);
						}
						else
						{
							callback(false);
						}
				});
		}

}
