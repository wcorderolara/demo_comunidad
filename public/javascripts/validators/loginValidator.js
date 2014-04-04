function LoginValidator(){

	this.loginErrors = $('#alerts');
	this.loginErrors.modal( { show : false, keyboard : true, backdrop : true } );

	this.showLoginError = function(t,m){
		$('#alerts div.modal-header h3').text(t);
		$('#alerts div.modal-body p').text(m);
		this.loginErrors.modal('show');
	}
}

LoginValidator.prototype.validateForm = function(){
	if($('#username-log').val() == ''){
		this.showLoginError('Puls3 | Error', 'Por favor ingresa un nombre de usuario válido');
		return false;
	}else if($('#password-log').val() == ''){
		this.showLoginError('Puls3 | Error', 'Por favor ingresa una contraseña válida');
		return false;
	}else{
		return true;
	}
}

LoginValidator.prototype.registerForm = function(){
	if( $('#username').val() == '' ){
		this.showLoginError('Puls3 | Error', 'Ingrese un nombre de usuario válido');
		return false;
	}else if( $('#tipoUsuario').val() == '0' ){
		this.showLoginError('Puls3 | Error', 'Seleccione un Tipo de Usuario por favor');
		return false;
	}else if( $('#email').val() == '' ){
		this.showLoginError('Puls3 | Error', 'Ingrese su correo electrónico por favor');
		return false;
	}else if( $('#informacion').val () == '' ){
		this.showLoginError('Puls3 | Error', 'Ingrese información para el usuario');
		return false;
	}else{
		return true;
	}
}