const express = require('express');
const userModel = require.main.require('./models/userModel');
var url = require('url');
const router = express.Router();

router.get('*', (req, res, next) => {

	next();

});

router.get('/create', (req, res) => {
	if (req.session.uname != "") {

		res.render('user/create');
	}
	else {
		res.redirect('/login');
	}
});


router.post('/create', (req, res) => {

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
		res.redirect('/login');
	}


});

router.get('/edit/:id', (req, res) => {

	if (req.session.uname != "") {

		var i = req.params.id;

		userModel.getById(i, function (results) {
			console.log(i);
			res.render('user/edit', { users: results });

		})

	}

	else {
		res.redirect('/login');
	}



});

router.post('/edit/:id', (req, res) => {

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

router.get('/delete/:id', (req, res) => {




	res.render('user/delete');



	//console.log(editUser.eName);




});

router.post('/delete/:id', (req, res) => {

	var i = req.params.id;

	userModel.delete(i, function (status) {

		if (!status) {

			res.redirect('/home/userlist');
		} else {
			res.redirect('/login');
		}

	})
});


module.exports = router;

