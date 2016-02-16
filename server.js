// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var app     = express();
var ig      = require('instagram-node').instagram();

// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// configure instagram app with client_id
ig.use({ 
    // get access token here: http://instagram.pixelunion.net/
    access_token: '1565794061.1677ed0.df3e4680a4a24a45b0e2c8369fb8df56',
    client_id: 'dcaf01db1bec49ea9d480188781b4d4e',
    client_secret: '8d1faa757ad64e5cbf022ac2e6340197' 
});

// SET THE ROUTES
// ===================================================
// home page route - popular images
app.get('/', function(req, res) {

    // use the instagram package to get popular media
    ig.media_popular(function(err, medias, remaining, limit) {

        // render the home page and pass in the popular images
        res.render('pages/index', { grams: medias });
    });

});


// START THE SERVER
// ==================================================
app.listen(8080);
console.log('App started! Look at http://localhost:8080');

// // Grab the packages we need
// //==========================
// var express = require('express');
// var app = express();
// var ig = require('instagram-node').instagram();

// //configure the app
// //==========================
// //tell node where to look for site resources
// app.use(express.static(__dirname + '/public'));

// //set the view engine to ejs
// app.set('view engine', 'ejs');

// //configure instagram app with client-id

// ig.use({
// 	client_id: 'dcaf01db1bec49ea9d480188781b4d4e',
// 	client_secret: '8d1faa757ad64e5cbf022ac2e6340197'
// })




// //set the routes
// //==========================
// // homepage route - popular images

// app.get('/', function (req,res) {
// 	//use instagram package to get popular media

// 	ig.media_popular(function(err,medias,remaining,limit){
// 	//render the home page and pass in images
// 		res.render('pages/index', {grams: medias});	
// 	})
	
// });


// //Start the server
// //===========================
// app.listen(8888, function(req,res){
// 	console.log("Server Running!");
// });
