function valid()
{
var name = document.forms["myform"]["username"].value;



if(name==""){
	alert("Username is BLANK!!");
return false;

}



if(name.length<3){
	alert("USERNAME MUST CONTAINS AT LEAST 3 LETTERS !!");
return false;

}


else{
for(i=0;i<name.length;i++)
{ch=name.charAt(i);
if(!(ch>='a'&&ch<='z')&&!(ch>='A'&&ch<='Z')&&!(ch>='0'&&ch<='9'))
{
	alert("Username IS VALID ONLY FOR A_Z / a_z");
}
}
}

var password = document.forms["myform"]["password"].value;

if(password==""){
	alert("PASSWORD IS BLANK !!");
return false;

}

if(password.length<6){
	alert("Password MUST CONTAIN AT LEAST 6 Characters or Digits");
return false;

}

var email = document.forms["myform"]["email"].value;
if(email==""){
	alert("EMAIL IS BLANK !!");
return false;

}


var at=email.indexOf('@');
var dot=email.lastIndexOf('.');
if(at<=0 || at+1 >= dot || dot+1 >=email.length-1)

{
alert("Enter  a VaLid EmaiL Address");
return false;

}

var gender = document.forms["myform"]["gender"].value;

if(gender==""){
	alert("Gender IS BLANK !!");
return false;

}

var education = document.forms["myform"]["education"].value;

if(education==""){
	alert("Education IS BLANK !!");
return false;

}

var type = document.forms["myform"]["type"].value;

if(type==""){
	alert("userType IS BLANK !!");
return false;

}

// var file = document.forms["myform"]["file"].value;
//
// if(file==""){
// 	alert("BROWSE A Picture to UPDATE please !!");
// return false;
//
// }


}
