Demo.Collections.UsersCollection = Backbone.Collection.extend({
	model : Demo.Models.UserModel,
	url : "",
	name : 'users'
});

Demo.Collections.users = Demo.Collections.UsersCollection;