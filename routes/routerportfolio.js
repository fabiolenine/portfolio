/*jshint esversion: 6 */
module.exports = function(app //, detalheemails
)
{
  app.get('/', function(req, res){
    	res.render('index.ejs');
	});
};
