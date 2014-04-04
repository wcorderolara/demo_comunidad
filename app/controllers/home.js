var homeController = function (app){
	console.log('homeController is load');

	app.get('/', function (req,res){
		res.render('index', { title: 'PULS3 | FrontEnd First Generation' });
	})

	app.get('/proyecto', function (req,res){
		res.render('proyecto', {title: 'Proyecto PULS3'})
	})

	app.get('/login', function (req,res){
		res.render('login', {title: 'Login | PULS3'});
	})

	app.get('/signup', function (req,res){
		res.render('signup', {title: 'registro | PULS3'});
	})
}

module.exports = homeController;