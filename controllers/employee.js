const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	
		next();
	
});

router.get('/', (req, res)=>{

	if(req.session.uname != ""){
		
			res.render('home/ehome');
	}

	else{
		res.redirect('/login');
		
	}

});





module.exports = router;