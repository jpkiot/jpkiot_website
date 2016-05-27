var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
        res.render('/public/views/index');
    });

app.listen(port, function() {
    console.log('App listening on port ' + port);
});
