var mysql = require('mysql');
var connection = mysql.createPool({
					host 	 : 'localhost',
					user	 : 'root',
					password : 'root',
					database : 'test'
				});

var apiController = function(app){
	console.log('ApiController is load');

	app.post('/add/user', function (req,res){
		tipousuario = parseInt(req.body.tipoUsuario);
		username  = req.body.username;
		email	  = req.body.email;
		informacion  = req.body.informacion;

		connection.getConnection(function (err,conn){

			if(err){
				console.log(err);
				res.statusCode = 500;
				res.send({
					result : 'error',
					err : err.code
				})
			}else{
				conn.query("INSERT INTO usuario(idUsuario,tipousuario,username,email,informacion,activo) VALUES(NULL,"+tipousuario+ ",'"+username+"','"+email+"','"+informacion+"',1)", function (err,rows,field){
					if(err){
						res.send({
							result : 'error',
							err    : err.code
						})
					}else{
						//debugger;
						console.log('success');
						res.redirect('/');
						//res.writeHead(200, {'Content-Type': 'application/json'});
						res.send(JSON.stringify('hola mundo'));
						
					}
					conn.release();
				});
			}
		});

	});

	app.get('/tipo_usuario', function (req,res){
		res.setHeader('Content-Type', 'application/json');
		connection.getConnection(function (err,conn){
			if(err){
				console.log(err);
				res.statusCode = 503;
				res.send({
					result: 'error',
					err: err.code
				});
			}else{
				conn.query('SELECT * FROM tipousuario WHERE activo = 1 ORDER BY descripcion', function (err,rows,fields){
					if(err){
						console.log(err);
						res.statusCode = 500;
						res.send({
							result : 'error',
							err : err.code
						});
					}else{
						res.send({
							result : 'success',
							err    : '',
							//fields : fields,
							user_types  : rows,
							length : rows.length,
						})
					}
					conn.release();
				});
			}
		});
	
	});

	app.get('/usuarios', function (req,res){
		res.setHeader('Content-Type', 'application/json');
		connection.getConnection(function (err,conn){
			if(err){
				console.log(err);
				res.statusCode = 503;
				res.send({
					result: 'error',
					err: err.code
				});
			}else{
				conn.query('SELECT 	usuario.idUsuario,usuario.tipousuario,tipousuario.descripcion,usuario.username,usuario.email,usuario.informacion FROM usuario INNER JOIN tipousuario ON tipousuario.idtipousuario = usuario.tipousuario;', function (err,rows,fields){
					if(err){
						console.log(err);
						res.statusCode = 500;
						res.send({
							result : 'error',
							err : err.code
						});
					}else{
						res.send({
							result : 'success',
							err    : '',
							//fields : fields,
							users  : rows,
							length : rows.length,
						})
					}
					conn.release();
				});
			}
		});
	});

};

module.exports = apiController;