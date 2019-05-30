const express = require('express');
const http = require('http');
const path = require('path');
const compression = require('compression')
// const shrinkRay = require('shrink-ray')

const app = express();


var path1 = __dirname + '/dist/rakuten-app';
// var port = 8080;
const port = process.env.PORT || 100;

app.use(compression())
// app.use(shrinkRay())

app.use(express.static(path1));
app.get('*', function(req, res) {
    res.sendFile(path1 + '/index.html');
});



// const port = process.env.PORT || 800;
// app.use(compression())
// app.use(shrinkRay())
// app.use(express.static(__dirname + '/dist/app-kookaat-UI'));
// app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));
const server = http.createServer(app);
server.listen(port, () => console.log('Running... on port ', port));
