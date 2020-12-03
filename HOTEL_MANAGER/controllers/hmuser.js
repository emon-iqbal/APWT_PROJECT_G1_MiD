const express = require('express');
const userModel = require.main.require('./models/userModel');
var url = require('url');
const router = express.Router();

router.get('*', (req, res, next) => {

	next();

});

router.get('/hmcreate', (req, res) => {
	if (req.session.uname != "") {

		res.render('user/hmcreate');
	}
	else {
		res.redirect('/hmlogin');
	}
});


router.post('/hmcreate', (req, res) => {

	if (req.session.uname != "") {
		rtag = req.session.uname;
		var newPost = {
			pTitle: req.body.pTitle,
			rName: req.body.rName,
			rPrice: req.body.rPrice,
			rType: req.body.rType,
			rDesc: req.body.rDesc,
			rTag: rtag,
			avail: req.body.avail
		};

		userModel.insert(newPost, function (status) {
			console.log(status);
			if (!status) {
				res.redirect('/home');
			} else {
				res.redirect('/login');
			}

		})

	}
	else {
		res.redirect('/hmlogin');
	}


});

router.get('/hmedit/:id', (req, res) => {

	if (req.session.uname != "") {

		var i = req.params.id;

		userModel.getById(i, function (results) {
			console.log(i);
			res.render('user/hmedit', { users: results });

		})

	}

	else {
		res.redirect('/login');
	}



});

router.post('/hmedit/:id', (req, res) => {

	if (req.session.uname != "") {

		var i = req.params.id;

		var editPost = {
			pTitle: req.body.pTitle,
			rName: req.body.rName,
			rPrice: req.body.rPrice,
			rType: req.body.rType,
			rDesc: req.body.rDesc,
			avail: req.body.avail,

		};

		console.log(editPost.pTitle);

		userModel.update(i, editPost, function (status) {

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

router.get('/hmdelete/:id', (req, res) => {
	
	res.render('user/hmdelete');

});

router.post('/hmdelete/:id', (req, res) => {

	var i = req.params.id;

	userModel.delete(i, function (status) {

		if (!status) {

			res.redirect('/home/hmuserlist');
		} else {
			res.redirect('/login');
		}

	})
});


module.exports = router;

