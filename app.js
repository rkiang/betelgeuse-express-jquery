var express = require('express');

var app = express();

var port = 4000;

app.use(express.static('public'));

app.use('/', function (req, res) {
    // res.send('test')    
})

app.listen(port, function() {
    console.log('port number is', port);
});