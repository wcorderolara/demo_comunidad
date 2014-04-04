Demo.Views.UserView = Backbone.View.extend({
	initialize : function(model){
		var template = ('<div class="usuario_container tipoUsuario-{{ tipousuario }}">'+
							'<a id="{{ idUsuario }}" class="usuario">'+
								'<figure class="img_usuario">'+
									'<img alt="{{ username }}" src="/images/profile.png">'+
								'</figure>'+
								'<div class="perfil_usuario">'+
									'<div class="name_usuario"> <p class="etiqueta">Nombre: </p>  <p class="info">{{ username }} </p> </div>'+
									'<div class="email_usuario"> <p class="etiqueta">email: </p>  <p class="info">{{ email }} </p> </div>'+
									'<div class="puesto_usuario"><p class="etiqueta">Puesto: </p> <p class="info">{{ descripcion }} </p> </div>'+
									'<div class="info_usuario"><p class="etiqueta">Info: </p>   <p class="info">{{ informacion }} </p> </div>'+
								'</div>'+
							'</a>'+
						'</div>');

		var self = this;
		this.model = model;
		this.model.on('change',function(){
			self.render();
		});

		this.template = swig.compile(template);;

	},

	render : function(data){
		var data = this.model.toJSON();
		var html = this.template(data);

		this.$el.html( html );

		return this;
	}

});