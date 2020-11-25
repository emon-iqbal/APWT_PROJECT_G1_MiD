const express 			= require ('express');
const upload 					= require ('express-fileupload');
const db 								= require.main.require ('./models/db');
const userModel		 = require.main.require ('./models/TraveLBLiss_users');
const usModel 			 = require.main.require ('./models/td_profile');
const tdModel 			 = require.main.require ('./models/td_list');
const vModel 			 = require.main.require ('./models/TD_vehicles');
const rModel 					= require.main.require ('./models/TD_regions');

const sModel 					= require.main.require ('./models/tp_students');
const t_SchModel 	= require.main.require ('./models/TP_Tsch.js');
const s_SchModel 	= require.main.require ('./models/TP_Ssch.js');
const uploadModel 	= require.main.require('./models/upload');

const router		=		express.Router();

router.get('*', (req, res, next) =>
{
		if(req.session.username == null)
		{
			res.redirect('/tdLogin');
		}
		else
		{
			next();
		}

});


router.get('/', (req, res) =>
{
		res.render('td_DASHBOARD/td_DASHBOARD', {username: req.session.username});
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>get,post for TD_Profile>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

				router.get('/TD_Profile', (req, res) =>
				{
						var username = req.session.username;
						userModel.getByUname(username, (results) =>
						{
							res.render('td_DASHBOARD/TD_Profile', { travelbliss_users : results, username: req.session.username});
								// 		res.render('dashboard/TP_Profile', { user : results, uname: req.session.username});
						});

				});

				router.get('/tdPHOTO', (req, res) =>
				{
					var username = req.session.username;
					userModel.getByUname(username, (results) =>
					{
						res.render('td_DASHBOARD/tdPHOTO', { travelbliss_users : results, username: req.session.username});
					});

				});

				router.get('/TD_Profile/update/:userid', (req, res) =>
				{
						userModel.get(req.params.userid, (result) =>
						{
								res.render('td_DASHBOARD/TD_profileUpdate', {travelbliss_users: result});
						});

				});

				router.post('/TD_Profile/update/:userid', (req, res) =>
				{
							var user = {
							username: req.body.username,
							password: req.body.password,
							email: req.body.email,
							type: req.body.type,
							gender: req.body.gender,
							education: req.body.education,
							//picture: req.body.file,
						    userid: req.params.userid
						};

					 usModel.update(user, (status) =>
					 {
							if(status)
							{
								res.redirect('/td_DASHBOARD/TD_Profile');
							}
							else
							{
								res.redirect('/td_DASHBOARD/TD_Profile');
							}
						});

					});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>get,post for TD_Lists>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



router.get('/TD_Lists', (req, res) =>
{
		tdModel.getAll(function(result)
		{
				res.render('td_DASHBOARD/TD_Lists', { td : result, username: req.session.username});
		});

});

router.get('/TD_Lists/insert', (req, res) =>
{
		res.render('td_DASHBOARD/TD_insert');
});

router.post('/TD_Lists/insert', (req, res) =>
{
					var td =	{
					td_name 		: req.body.tdname,
					email					:	req.body.email,
					gender				: req.body.gender,
					education		 : req.body.education
					}

						tdModel.insert(td, (status) =>
						{
									if(status)
									{
										res.redirect('/td_DASHBOARD/TD_Lists');
									}
									else
									{
										res.redirect('/td_DASHBOARD/TD_insert');
									}
								});

		});

router.get('/TD_Lists/edit/:td_id', (req, res) =>
{
		tdModel.get(req.params.td_id, (result) =>
		{
				res.render('td_DASHBOARD/TD_edit', {td: result});
		});
});

router.post('/TD_Lists/edit/:td_id', (req, res) =>
{
		var td =	{
		td_name 		: req.body.tdname,
		email						: req.body.email,
		gender				: req.body.gender,
		education		: req.body.education,

			td_id		: req.params.td_id

		};

	tdModel.update(td, (status) =>
	{
	 	if(status)
		{
		 	res.redirect('/td_DASHBOARD/TD_Lists');
	 	}
		else
		{
		 	res.redirect('/td_DASHBOARD/TD_Lists');
	 	}
	});

});

router.get('/TD_Lists/delete/:td_id', (req, res) =>
{

	tdModel.get(req.params.td_id, (result) =>
	{
		res.render('td_DASHBOARD/TD_delete', {td: result});
	});

});

router.post('/TD_Lists/delete/:td_id', (req, res) =>
{
			tdModel.delete(req.body.td_id, (status) =>
			{
				if(status)
				{
					res.redirect('/td_DASHBOARD/TD_Lists');
				}
				else
				{
					res.redirect('/td_DASHBOARD/TD_Lists');
				}
			});

});


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>get,post for TD_Vehicles>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



router.get('/TD_Vehicles', (req, res) =>
{
		vModel.getAll(function(result)
		{
				res.render('td_DASHBOARD/TD_Vehicles', { td : result, username: req.session.username});
		});

});

router.get('/TD_Vehicles/insert', (req, res) =>
{
		res.render('td_DASHBOARD/TD_v_insert');
});

router.post('/TD_Vehicles/insert', (req, res) =>
{
					var td =	{
					v_name 			: req.body.v_name,
					v_type				:	req.body.v_type,
					v_distance	: req.body.v_distance,
					v_cost		 		: req.body.v_cost
					}

						vModel.insert(td, (status) =>
						{
									if(status)
									{
										res.redirect('/td_DASHBOARD/TD_Vehicles');
									}
									else
									{
										res.redirect('/td_DASHBOARD/TD_v_insert');
									}
								});

		});

router.get('/TD_Vehicles/edit/:td_id', (req, res) =>
{
		vModel.get(req.params.td_id, (result) =>
		{
				res.render('td_DASHBOARD/TD_v_update', {td: result});
		});
});

router.post('/TD_Vehicles/edit/:td_id', (req, res) =>
{
		var td =	{
		v_name 			: req.body.v_name,
		v_type				:	req.body.v_type,
		v_distance	: req.body.v_distance,
		v_cost		 		: req.body.v_cost,

			td_id		: req.params.td_id

		};

	vModel.update(td, (status) =>
	{
	 	if(status)
		{
		 	res.redirect('/td_DASHBOARD/TD_Vehicles');
	 	}
		else
		{
		 	res.redirect('/td_DASHBOARD/TD_Vehicles');
	 	}
	});

});

router.get('/TD_Vehicles/delete/:td_id', (req, res) =>
{

	vModel.get(req.params.td_id, (result) =>
	{
		res.render('td_DASHBOARD/TD_v_delete', {td: result});
	});

});

router.post('/TD_Vehicles/delete/:td_id', (req, res) =>
{
			vModel.delete(req.body.td_id, (status) =>
			{
				if(status)
				{
					res.redirect('/td_DASHBOARD/TD_Vehicles');
				}
				else
				{
					res.redirect('/td_DASHBOARD/TD_Vehicles');
				}
			});

});


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>get,post for TD_Available_Regions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



router.get('/TD_Available_Regions', (req, res) =>
{
		rModel.getAll(function(result)
		{
				res.render('td_DASHBOARD/TD_Available_Regions', { td : result, username: req.session.username});
		});

});

router.get('/TD_Available_Regions/insert', (req, res) =>
{
		res.render('td_DASHBOARD/TD_R_insert');
});

router.post('/TD_Available_Regions/insert', (req, res) =>
{
					var td =	{
					v_name 			: req.body.r_name,
					v_type				:	req.body.country,
					v_distance	: req.body.continent,
					v_cost		 		: req.body.r_code
					}

						rModel.insert(td, (status) =>
						{
									if(status)
									{
										res.redirect('/td_DASHBOARD/TD_Available_Regions');
									}
									else
									{
										res.redirect('/td_DASHBOARD/TD_R_insert');
									}
								});

		});

router.get('/TD_Available_Regions/edit/:td_id', (req, res) =>
{
		rModel.get(req.params.td_id, (result) =>
		{
				res.render('td_DASHBOARD/TD_R_update', {td: result});
		});
});

router.post('/TD_Available_Regions/edit/:td_id', (req, res) =>
{
		var td =	{
		v_name 			: req.body.r_name,
		v_type				:	req.body.country,
		v_distance	: req.body.continent,
		v_cost		 		: req.body.r_code,

			td_id		: req.params.td_id

		};

	rModel.update(td, (status) =>
	{
	 	if(status)
		{
		 	res.redirect('/td_DASHBOARD/TD_Available_Regions');
	 	}
		else
		{
		 	res.redirect('/td_DASHBOARD/TD_Available_Regions');
	 	}
	});

});

router.get('/TD_Available_Regions/delete/:td_id', (req, res) =>
{

	rModel.get(req.params.td_id, (result) =>
	{
		res.render('td_DASHBOARD/TD_R_delete', {td: result});
	});

});

router.post('/TD_Available_Regions/delete/:td_id', (req, res) =>
{
			rModel.delete(req.body.td_id, (status) =>
			{
				if(status)
				{
					res.redirect('/td_DASHBOARD/TD_Available_Regions');
				}
				else
				{
					res.redirect('/td_DASHBOARD/TD_Available_Regions');
				}
			});

});


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>













//>>>>>>>>>>>>>>get,post for TP_Available_Tuitions>>>>>>>>>>>>>>insert~~TP_Offered>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



router.get('/TP_Available_Tuitions', function(req, res){


		avModel.getAll(function(result){
			res.render('td_DASHBOARD/TP_Available_Tuitions', { tuitionList : result, uname: req.session.username});
		});

});


router.get('/TP_Available_Tuitions/insert', function(req, res){

		res.render('td_DASHBOARD/TP_Offered');

});

router.post('/TP_Available_Tuitions/insert', function(req, res)
{

		var offer =	{
			tname 		: req.body.tname,
			sname			: req.body.sname,
			class		: req.body.classofS,
			sub				: req.body.sub,
			area			: req.body.area

		}

		avModel.insert(offer, function(status){
			if(status){
				res.redirect('/td_DASHBOARD/TP_Available_Tuitions');
			}else{
				res.redirect('/td_DASHBOARD/TP_Available_Tuitions');
			}
		});

});

router.get('/TP_Offered', function(req, res){

			res.render('td_DASHBOARD/TP_Offered');
		});

		router.post('/TP_Offered', function(req, res){

				var offer =	{
					tname 		: req.body.tname,
					sname			: req.body.sname,
					class		: req.body.classofS,
					sub				: req.body.sub,
					area			: req.body.area

				}

				avModel.insert(offer, function(status){
					if(status){
						res.redirect('/td_DASHBOARD/TP_Available_Tuitions');
					}else{
						res.redirect('/td_DASHBOARD/TP_Available_Tuitions');
					}
				});

		});

router.get('/TP_Available_Tuitions/edit/:serial', function(req, res){

	avModel.get(req.params.serial, function(result){
		res.render('td_DASHBOARD/TP_Av_UPDATE', {available: result});
	});

});

router.post('/TP_Available_Tuitions/edit/:serial', function(req, res){

	var available =	{
		tname 		: req.body.tname,
		sname			: req.body.sname,
		class		: req.body.classofS,
		sub				: req.body.sub,
		area			: req.body.area,

		serial		: req.params.serial

	};

 avModel.update(available, function(status){
	 if(status){
		 res.redirect('/td_DASHBOARD/TP_Available_Tuitions');
	 }else{
		 res.redirect('/td_DASHBOARD/TP_Available_Tuitions');
	 }
	});

});

router.get('/TP_Available_Tuitions/delete/:serial', function(req, res){

	avModel.get(req.params.serial, function(result){
		res.render('td_DASHBOARD/TP_Av_DELETE', {available: result});
	});

});

router.post('/TP_Available_Tuitions/delete/:serial', function(req, res){

	avModel.delete(req.body.serial, function(status){
		if(status){
			res.redirect('/td_DASHBOARD/TP_Available_Tuitions');
		}else{
			res.redirect('/td_DASHBOARD/TP_Available_Tuitions');
		}
	});

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>get,post for TP_Teacher_List>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



router.get('/TP_Teacher_List', function(req, res){


		tModel.getAll(function(result){
			res.render('td_DASHBOARD/TP_Teacher_List', { teacher : result, uname: req.session.username});
		});

});

router.get('/tinsert', function(req, res){

			res.render('td_DASHBOARD/tinsert');
		});


router.get('/TP_Teacher_List/insert', function(req, res){

		res.render('td_DASHBOARD/tinsert');

});

router.post('/TP_Teacher_List/insert', function(req, res){

		var teacher =	{
			tname 		: req.body.tname,
			email			: req.body.email,
			gender		: req.body.gender,
			education	: req.body.education,
			provide		: req.body.provide

		}

		tModel.insert(teacher, function(status){
			if(status){
				res.redirect('/td_DASHBOARD/TP_Teacher_List');
			}else{
				res.redirect('/td_DASHBOARD/TP_Teacher_List');
			}
		});

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>get,post for TP_Student_List>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get('/TP_Student_List', function(req, res){

		sModel.getAll(function(result){
			res.render('td_DASHBOARD/TP_Student_List', { student : result, uname: req.session.username});
		});

});

router.get('/TP_Student_List/insert', function(req, res){

		res.render('td_DASHBOARD/TP_New_Student');

});

router.post('/TP_Student_List/insert', function(req, res){

		var student =	{
			sname 		: req.body.sname,
			sschool			: req.body.school,
			email		: req.body.email,
			gender				: req.body.gender,
			classs			: req.body.classs,
			course			: req.body.course

		}

		sModel.insert(student, function(status){
			if(status){
				res.redirect('/td_DASHBOARD/TP_Student_List');
			}else{
				res.redirect('/td_DASHBOARD/TP_Student_List');
			}
		});

});


router.get('/TP_Student_List/update/:id', function(req, res){

	sModel.get(req.params.id, function(result){
		res.render('td_DASHBOARD/TP_St_UPDATE', {student: result});
	});

});

router.post('/TP_Student_List/update/:id', function(req, res){

	var student =	{
		sname 		: req.body.sname,
		sschool			: req.body.school,
		email		: req.body.email,
		gender				: req.body.gender,
		classs			: req.body.classs,
		course			: req.body.course,

		id		: req.params.id

	};

 sModel.update(student, function(status){
	 if(status){
		 res.redirect('/td_DASHBOARD/TP_Student_List');
	 }else{
		 res.redirect('/td_DASHBOARD/TP_Student_List');
	 }
	});

});

router.get('/TP_Student_List/delete/:id', function(req, res){

	sModel.get(req.params.id, function(result){
		res.render('td_DASHBOARD/TP_Student_DELETE', {student: result});
	});

});

router.post('/TP_Student_List/delete/:id', function(req, res){

	sModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/td_DASHBOARD/TP_Student_List');
		}else{
			res.redirect('/td_DASHBOARD/TP_Student_List');
		}
	});

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>get,post for TP_Teacher_Schedules>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get('/TP_Teacher_Schedules', function(req, res)
{
		t_SchModel.getAll(function(result){
			res.render('td_DASHBOARD/TP_Teacher_Schedules', { schedule : result, uname: req.session.username});
		});

});


router.get('/TP_Teacher_Schedules/insert', function(req, res){

		res.render('td_DASHBOARD/TP_Tsch_insert');

});

router.post('/TP_Teacher_Schedules/insert', function(req, res){

	var tsch =	{
		name		: req.body.name,
		day		: req.body.day,
		time	: req.body.time,
			id		: req.params.id

	};

		t_SchModel.insert(tsch, function(status){
			if(status){
				res.redirect('/td_DASHBOARD/TP_Teacher_Schedules');
			}else{
				res.redirect('/td_DASHBOARD/TP_Teacher_Schedules');
			}
		});

});


router.get('/TP_Teacher_Schedules/update/:id', function(req, res){

	t_SchModel.get(req.params.id, function(result){
		res.render('td_DASHBOARD/TP_Tsch_Update', {tsch: result});
	});

});

router.post('/TP_Teacher_Schedules/update/:id', function(req, res){

	var tsch =	{
		name		: req.body.name,
		day		: req.body.day,
		time	: req.body.time,
			id		: req.params.id

	};

 	t_SchModel.update(tsch, function(status){
	 if(status){
		 res.redirect('/td_DASHBOARD/TP_Teacher_Schedules');
	 }else{
		 res.redirect('/td_DASHBOARD/TP_Teacher_Schedules');
	 }
	});

});

router.get('/TP_Teacher_Schedules/delete/:id', function(req, res){

	t_SchModel.get(req.params.id, function(result){
		res.render('td_DASHBOARD/TP_Tsch_Delete', {tsch: result});
	});

});

router.post('/TP_Teacher_Schedules/delete/:id', function(req, res){

	t_SchModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/td_DASHBOARD/TP_Teacher_Schedules');
		}else{
			res.redirect('/td_DASHBOARD/TP_Teacher_Schedules');
		}
	});

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>get,post for TP_Student_Schedules>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get('/TP_Student_Schedules', function(req, res)
{
		s_SchModel.getAll(function(result){
			res.render('td_DASHBOARD/TP_Student_Schedules', { schedule : result, uname: req.session.username});
		});

});


router.get('/TP_Student_Schedules/insert', function(req, res){

		res.render('td_DASHBOARD/TP_Ssch_insert');

});

router.post('/TP_Student_Schedules/insert', function(req, res){

	var s_sch =	{
		name		: req.body.name,
		day		: req.body.day,
		time	: req.body.time,
			id		: req.params.id

	};

		s_SchModel.insert(s_sch, function(status){
			if(status){
				res.redirect('/td_DASHBOARD/TP_Student_Schedules');
			}else{
				res.redirect('/td_DASHBOARD/TP_Student_Schedules');
			}
		});

});


router.get('/TP_Student_Schedules/update/:id', function(req, res){

	s_SchModel.get(req.params.id, function(result){
		res.render('td_DASHBOARD/TP_Ssch_Update', {s_sch: result});
	});

});

router.post('/TP_Student_Schedules/update/:id', function(req, res){

	var s_sch =	{
		name		: req.body.name,
		day		: req.body.day,
		time	: req.body.time,
			id		: req.params.id

	};

 	s_SchModel.update(s_sch, function(status){
	 if(status){
		 res.redirect('/td_DASHBOARD/TP_Student_Schedules');
	 }else{
		 res.redirect('/td_DASHBOARD/TP_Student_Schedules');
	 }
	});

});

router.get('/TP_Student_Schedules/delete/:id', function(req, res){

	s_SchModel.get(req.params.id, function(result){
		res.render('td_DASHBOARD/TP_Ssch_Delete', {s_sch: result});
	});

});

router.post('/TP_Student_Schedules/delete/:id', function(req, res){

	s_SchModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/td_DASHBOARD/TP_Student_Schedules');
		}else{
			res.redirect('/td_DASHBOARD/TP_Student_Schedules');
		}
	});

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



module.exports = router;
