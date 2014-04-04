function LoginController(){

	$('#login-form #forgot-password').on('click', function(){
		$('#get-credentials').modal('show');
	});

	$('#get-credentials').on('show',function(){

		$('#email-lg').focus();
	});

	$('#get-credentials').on('hidden',function(){
		$('#username').focus();
	});	
}