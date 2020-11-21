const express = require('express');
const userModel = require.main.require('./models/userModel');
const router = express.Router();


router.get('*', (req, res, next) => {

	next();

});

router.get('/', (req, res) => {

	if (req.session.uname != "") {
		var suname = req.session.uname;
		//var suid = req.session.uname;
		res.render('home/index', { name: suname, id: '123' });
	}

	else {
		res.redirect('/login');
	}

});


router.get('/userlist', (req, res) => {

	if (req.session.uname != "") {
		suname = req.session.uname;
		// console.log(suname);
		userModel.getAll(suname,function (results) {
			res.render('home/userlist', { users: results });

		});
	}
	else {
		res.redirect('/login');
	}


});

router.post('/', (req, res) => {



	var word = req.body.search;


	userModel.search(word, function (results) {

		console.log("in controller " + { users: results });
		res.render('user/edit', { users: results });

	});

});




module.exports = router;
