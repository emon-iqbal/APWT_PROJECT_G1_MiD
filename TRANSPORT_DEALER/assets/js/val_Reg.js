function valid()
{
var name = document.forms["myform"]["username"].value;



if(name==""){
	alert("Username is BLANK !!");
return false;

}



if(name.length<4){
	alert("Username Must be at least 4 Letters");
	return false;
}

var password = document.forms["myform"]["password"].value;

if(password==""){
	alert("Password is BLANK !!");
return false;

}

if(password.length<6){
	alert("Password Can't Be Less Than 6 Characters or Digits");
return false;

}

var email = document.forms["myform"]["email"].value;
if(email==""){
	alert("Email is BLANK !!");
return false;

}


var at=email.indexOf('@');
var dot=email.lastIndexOf('.');
if(at<=0 || at+1 >= dot || dot+1 >=email.length-1)

{
alert("inVaLid Email Address !!");
return false;

}

var gender = document.forms["myform"]["gender"].value;

if(gender==""){
	alert("Gender is BLANK !!");
return false;

}

var education = document.forms["myform"]["education"].value;

if(education==""){
	alert("Education is BLANK !!");
return false;

}

var type = document.forms["myform"]["type"].value;

if(type==""){
	alert("Type is BLANK !!");
return false;

}


var file = document.forms["myform"]["file"].value;

if(file==""){
	alert("BROWSE A Picture to UPLOAD please !!");
return false;

}

}



function onlyalphabets(e)
{
		var name=e.which||e.keycode;


	/*ASCII code: 		65-90>> UPPERCASE
										97-122>> lowercase
										8>>   	Backspace,
										95>>  	underscore[_]
										32>>	space
	*/

			if((name>=65 && name<=90) || (name==95) || (name==32) || (name>=97 && name<=122) || (name==8))
			{
				return true;
			}
			else
			{
				return false;
			}

}
