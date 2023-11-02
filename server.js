let express = require('express');

const server = express();
const hostname = '127.0.0.1';
const port = 3000;

server.use(express.static('public'));
server.use('/css', express.static(__dirname + 'public/css'));
server.use('/js', express.static(__dirname + 'public/js'));
server.use('/images', express.static(__dirname + 'public/images'));

server.set('view engine', 'ejs');
server.set('views', './views');
server.get('/', function(req, res) {
  res.render('home');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});