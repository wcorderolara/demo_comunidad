function EmailValidator(){

	var _local = this;

	_local.retrievePassword = $('#get-credentials');
	_local.retrievePassword.modal = ({ show: false, keyboard : true, backdrop : true });
	_local.retrievePasswordAlert = $('#get-credentials .alert');
	_local.retrievePassword.on('show', function(){
		$('#get-credentials-form').resetForm();
		_local.retrievePassword.hide();
	});
}

EmailValidator.prototype.validateEmail = function(e){
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(e);	
}

EmailValidator.prototype.showEmailAlert = function(m){
	this.retrievePasswordAlert.attr('class', 'alert alert-danger');
	this.retrievePasswordAlert.html(m);
	this.retrievePasswordAlert.show();
}

EmailValidator.prototype.hideEmailAlert = function(){
	this.retrievePasswordAlert.hide();
}

EmailValidator.prototype.showEmailSuccess = function(m){
	this.retrievePasswordAlert.attr('class', 'alert alert-success');
	this.retrievePasswordAlert.html(m);
	this.retrievePasswordAlert.fadeIn(500);	
}