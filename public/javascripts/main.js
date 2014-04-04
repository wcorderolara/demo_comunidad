$(document).ready(function(){
	console.log('start');

	window.collections.users = new Demo.Collections.UsersCollection();

	window.collections.users.on('add', function (model){
		var view = new Demo.Views.UserView(model);
		view.render();
		view.$el.appendTo("#listing_users");
	});

	console.log("hola");
	var xhr = $.ajax({
        type : 'GET',
        url  : '//162.243.96.184:3002/usuarios',
        //dataType : 'jsonp'    
    })

	xhr.done(function (data){
		//debugger;
		console.log(data);

		data.users.forEach(function (users){
			window.collections.users.add(users);
		});
	});
});