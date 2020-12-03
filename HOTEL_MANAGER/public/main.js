
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
});