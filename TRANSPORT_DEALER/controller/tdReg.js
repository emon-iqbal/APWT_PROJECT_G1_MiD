var express 	= require('express');
var uploadModel 	= require.main.require('./models/upload');
var regModel 	= require.main.require('./models/TraveLBLiss_users');
var upload = require('express-fileupload');
var router 		= express.Router();


router.get('/', (req, res) => {

		res.render('tdRegistration/tdReg');

});

router.post('/', (req, res) =>
{

	if(req.files)
	{
			console.log(req.files);
			var file = req.files.file;
			var filename = file.name;
			if(file.mimetype == "image/jpeg" || file.mimetype == "image/jpg" || file.mimetype == "image/JPG" || file.mimetype == "image/png")
			{
					file.mv ('./assets/BackPics/'+file.name,  (err) =>
					{
							if(err)
							{
								res.send(err);
							}
							else
							{
									var user =	{
										username		  : req.body.username,
										password		  : req.body.password,
										email						 : req.body.email,
										gender				 : req.body.gender,
										education			: req.body.education,
										type						 : req.body.type,
										file 							: filename

									}

									uploadModel.insert(user, (status) =>
									{
												if(status)
												{
														res.redirect('/tdLogin');
												}
												else
												{
														res.redirect('/tdLogin');
												}
										});
							}
					})
			}
			else
			{
				console.log(" \n \n OOPSS !! YOUR UPLOADED FiLE IS INVALID !! \n \n  >>>>ONLY ## .jpg and ## .png extension is acceptable here  ~__~" );
				res.redirect('/');
			}
	}

});

module.exports = router;
