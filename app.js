const http = require('http');

const hostname = '127.0.0.1';
const port = 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // this is the incoming roiute, just like in Vue
  let url = req.url;

  if(url == "/about"){
    res.write(`<h1>You're on the ${url} page!</h1>`)
    res.end();
  } else if (url === "/contact") {

    res.write(`<h1>You're on the ${url} page!</h1>`)
    res.end();
  } else {
    res.write(`<h1>Hello world! or at least everyone on port ${port} </h1>`)
    res.end('Hello World\nLegend\nHate Speech\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});