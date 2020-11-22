const express = require('express');
const commentModel = require('../models/commentModel');
const userModel = require.main.require('./models/userModel');
const router = express.Router();


router.get('*', (req, res, next) => {

	next();

});

router.get('/', (req, res) => {

	if (req.session.uname != "") {
		var suname = req.session.uname;
		//var suid = req.session.uname;
		res.render('home/index', { name: suname});
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

router.get('/commentlist', (req, res) => {

	if (req.session.uname != "") {
		//suname = req.session.uname;
		// console.log(suname);
		commentModel.getAll(function (results) {
			res.render('home/commentlist', { users: results });

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

router.get('/ajaxsearch/:id',(req,res)=>{

	var txt = req.body.search;

	console.log(txt);

	var word = req.params.id;
	console.log('word value '+word);
	if(word!=null || word!=undefined || txt!=null)
	{
		userModel.search(word, function(results){

			var str = "";
			for(i=0;i<results.length;i++)
			{
				str+='<a style="position:relative; left:30px; font-size:20px; margin-top:50px;" href="/user/edit/'+results[i].pid+'">'+results[i].ptitle+'</a><br><br>';

			}
			console.log("in ajax "+str);
			//res.render('user/edit', {users: results});
			res.send(str);

		});
	}
	

});


module.exports = router;
