const express = require('express');
var compression = require('compression');
const path = require('path');
const app = express();
app.use(compression())
app.use(express.static(__dirname + '/dist/massby-candle-store'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/massby-candle-store/index.html'));
});
app.listen(process.env.PORT || 8080);
