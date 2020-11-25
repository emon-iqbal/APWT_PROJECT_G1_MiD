const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();

router.get('/', (req, res)=>{
	res.render('login/a_index');
});

router.post('/', (req, res)=>{
req.session.uname = req.body.username;

console.log(req.body.username);

	var user = {
		uname: req.body.username,
		password: req.body.password
	};

	userModel.validate(user, function(status){
		if(status == "admin"){
			
			req.session.uname = req.body.username;
			
				res.redirect('/home');
			}
			
			else{
			res.redirect('/login');
		}
	});
}); 

module.exports = router;
