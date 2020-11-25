const express 			= require ('express');
const upload					= require ('express-fileupload');
const exSession			= require ('express-session');
const exValidator			= require ('express-validator');
const bodyParser		= require ('body-parser');
const apiResponse = require("express-api-response");
//------------------------------------------------------
const tdLogin 								= require ('./controller/tdLogin');
const tdRegistration 			= require ('./controller/tdReg');
const td_dashboard 			= require  ('./controller/td_DASHBOARD');
const td_logout 						= require  ('./controller/td_LogouT');
const app 											= express ();																//app variables


//config
app.set ('view engine', 'ejs');

//middleware
app.use ('/DEALit', express.static('assets'));
app.use (upload());
app.use (bodyParser.urlencoded({extended: true}));
app.use (exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use ('/tdReg', tdRegistration);
app.use ('/tdLogin', tdLogin);
app.use ('/td_LogouT', td_logout);
app.use ('/td_DASHBOARD', td_dashboard);
//app.use(express.static(__dirname+"/"));

//router definition
app.get ('/', (req, res) => {

	res.send ("<br><br><br><center><table><tr><td><center><h1><font color='red'><u><b>EXPLORE TRAVEL TO iGNORE GRAVEL</b></u></h1></font><br><font color='blue'><h2>[[ Already a MEMBER? Hit The Login link<br>Not a MEMBER? no worries, make a Registration your way...]] </h2></font></center></td></tr><br><br><tr><td><center><h1><font color='red'><a href='/tdLogin'> LOGiN</a> ~ ~ ~ <a href='/tdReg'> Registration</a></center></h1></font></td></tr></table></center> ");

});

//server activation
app.listen (3000, () => {

	console.log('EXPRESS http SERVER BEGiNS...3000');

});









//app.use('/Halloween-IN-Rockport-MA', express.static('assets'));
//app.use('/tpic', express.static('assets'));
//app.use('/deL', express.static('assets'));
//app.use('/Windows-10-Wallpapers-20-1920-x-1080', express.static('assets'));
