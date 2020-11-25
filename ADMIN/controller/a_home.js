const express = require('express');
const userModel = require.main.require('./models/userModel');
const router = express.Router();


router.get('*', (req, res, next) => {

	next();

});

router.get('/', (req, res) => {

	if (req.session.uname != "") {
		var suname = req.session.uname;
		res.render('home/a_index', { name: suname});
	}
	else {
		res.redirect('/login');
	}

});


router.get('/a_userlist', (req, res) => {

	if (req.session.uname != "") {
		suname = req.session.uname;
		// console.log(suname);
		userModel.getAll(suname,function (results) {
			res.render('home/a_userlist', { users: results });

		});
	}
	else {
		res.redirect('/login');
	}


});


module.exports = router;
