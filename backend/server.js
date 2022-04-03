const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Ceci est la réponse du serveur');
});

server.listen(process.env.PORT || port, hostname, () => {
  console.log(`le serveur est en exécution sur localhost:${port}/`);
});