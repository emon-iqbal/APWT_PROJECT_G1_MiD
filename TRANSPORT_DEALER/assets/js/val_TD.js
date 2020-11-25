      /*ASCII code: 65-90>> UPPERCASE
      8>>   Backspace,
      95>>  underscore[_]*/

      function onlyalphabets(e)
      {
      var tdname=e.which||e.keycode;
        if((tdname>=65 && tdname<=90) || (tdname==95) || (tdname>=97 && tdname<=122) || tdname==8)
        {
          return true;
        }
        else
        {
          return false;
        }
      }

    function upCheck()
    {
			var tpname = document.forms["myform"]["tdname"].value;
			var email = document.forms["myform"]["email"].value;
			var gender = document.forms["myform"]["gender"].value;
			var edu = document.forms["myform"]["education"].value;

      if(tpname == "")
      {
        alert('PLEASE FILL THE TD_NAME to proceed');
        return false;
      }
      if(email == "")
      {
        alert('PLEASE FILL THE email to proceed');
        return false;
      }
			if(gender==""){
				alert("Gender is BLANK !!");
			return false;

			}
      if(edu == "")
      {
        alert('PLEASE FILL THE education status to proceed');
        return false;
      }

      if(tpname.length<8)
      {
        alert('TDName must be at least 8 characters to be valid in this field');
        return false;
      }
      if(tpname.length>15)
      {
        alert('TDName must be less than 15 characters to be valid in this field');
        return false;
      }
      else
      {
        return true;
      }

    }
