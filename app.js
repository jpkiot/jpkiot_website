var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.get('/', function(req, res) {
        res.render('/public/views/index');
    });

app.listen(port, function() {
    console.log('App listening on port ' + port);
});
