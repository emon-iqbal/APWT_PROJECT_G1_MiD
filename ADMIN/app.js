//declaration
const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');

const login				= require('./controller/a_login');
const logout			= require('./controller/a_logout');
const home				= require('./controller/a_home');
//const comment			= require('./controller/a_comment');
//const path				= require('path');

const user				= require('./controller/a_user');
const app				= express();
const port				= 3000;


//configuration
app.set('view engine', 'ejs');


//middleware
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));



app.use('/login', login);
app.use('/home', home);
app.use('/logout', logout);
app.use('/user', user);


//router
app.get('/', (req, res)=>{
	res.send('Welcome');
});

//server startup
app.listen(port, (error)=>{
	console.log('server started at '+port);
});
