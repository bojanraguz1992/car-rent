// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
	
// config files

var port = process.env.PORT || 8080;
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname)); 
require('./routes')(app); 
app.listen(port);	
console.log('Go to localhost:' + port); 			
exports = module.exports = app; 						