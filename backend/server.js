const http = require('http');
const app = require('./app');

const hostname = 'localhost';
const port = 3000;

app.set('port', process.env.PORT || 3000)
const server = http.createServer(app);

server.listen(process.env.PORT || port, hostname, () => {
  console.log(`le serveur est en exécution sur localhost:${port}/`);
});