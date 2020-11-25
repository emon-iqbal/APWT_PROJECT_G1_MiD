const express = require('express');
const userModel = require.main.require('./models/userModel');
var url = require('url');
const router = express.Router();

router.get('*', (req, res, next) => {

	next();

});

router.get('/a_create', (req, res) => {
	if (req.session.uname != "") {

		res.render('user/a_create');
	}
	else {
		res.redirect('/a_login');
	}
});


router.post('/a_create', (req, res) => {

	if (req.session.uname != "") {
		var newUser = {
			username: req.body.username,
			password: req.body.password,
			email: req.body.email,
			gender: req.body.gender,
			education: req.body.education,
			type:  req.body.type
		};

		userModel.insert(newUser, function (status) {
			console.log(status);
			if (!status) {
				res.redirect('/home');
			} else {
				res.redirect('/login');
			}

		})

	}
	else {
		res.redirect('/a_login');
	}


});

router.get('/a_edit/:userid', (req, res) => {

	if (req.session.uname != "") {

		var i = req.params.userid;

		userModel.getById(i, function (results) {
			console.log(i);
			res.render('user/a_edit', { users: results });

		})

	}

	else {
		res.redirect('/login');
	}



});

router.post('/a_edit/:userid', (req, res) => {

	if (req.session.uname != "") {

		var i = req.params.userid;

		var editUser = {
			username: req.body.username,
			password: req.body.password,
			email: req.body.email,
			gender: req.body.gender,
			education: req.body.education,
			type:  req.body.type

		};

		//console.log(editPost.pTitle);

		userModel.update(i, editUser, function (status) {

			if (!status) {

				res.redirect('/home');
			} else {
				res.redirect('/login');
			}

		})

	}
	// else{
	// 		res.redirect('/login');
	// 	}


}

);

router.get('/a_delete/:userid', (req, res) => {
	
	res.render('user/a_delete');

});

router.post('/a_delete/:userid', (req, res) => {

	var i = req.params.userid;

	userModel.delete(i, function (status) {

		if (!status) {

			res.redirect('/home/a_userlist');
		} else {
			res.redirect('/login');
		}

	})
});


module.exports = router;

