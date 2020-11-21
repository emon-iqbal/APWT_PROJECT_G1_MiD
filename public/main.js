
$(document).ready(function(){
	$('#name').keyup(function()
	{
		console.log(this.value);
		$.ajax({

			url: '/home/ajaxsearch/'+this.value,
			method: 'get',
			datatype : 'json',
			data : {'name':name},
			contentType : "application/x-www-form-urlencoded",
			success:function(response){

				$('#info').html(response);
			}
		});
	});
	/*$('.search').click(function(){
		var name = $("#name").val();

		console.log(name);
		$.ajax({
			url: '/home',
			method: 'post',
			datatype : 'json',
			data : {'name':name},
			contentType : "application/x-www-form-urlencoded",
			success:function(response){
				console.log(response);
				if(response.users !== 'error'){

					

					// $('#info').html(response.user.id);
					 
					$('#info').html('Name: '+response.users.cName+'<br>');
					 
					$('#name').val('');
					
				}else{
					$('#info').html('<hr>'+'**can not found!!');
				}
			},
			error:function(response){
				alert('server error')
			}
		});
	});*/
});