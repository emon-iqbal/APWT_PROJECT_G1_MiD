function validate()
{
	var name = document.forms["logform"]["username"].value;
if(name==""){
	alert("Username is BLANK !!");
return false;

}
var password = document.forms["logform"]["password"].value;

if(password==""){
	alert("Password is BLANK !!");
return false;

}

var type = document.forms["logform"]["type"].value;

if(type==""){
	alert("USER TYPE IS BLANK !!");
return false;

}



}

function onlyalphabets(e)
{
		var name=e.which||e.keycode;


/*ASCII code: 		65-90>> UPPERCASE
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
