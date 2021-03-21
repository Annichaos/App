const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(` <!DOCTYPE html>
<html>
<head>
<title>!schizophrenic=true</title>
</head>
<body style="background-color:#b5e2e7;">".
<body>
<p><br></p>
<p><br></p>
<p><br></p>
<p><br></p>
<p style="font-family:sans serif" align="center">Ich w&uuml;nsche euch allen Gl&uuml;ck und Liebe.</p>

<h1 style="font-family:verdana" align="center" ><font color="#83ae22"> Pers&ouml;nlichkeit<font></h1>

<p style="font-family:sans serif"align="center"><font color="black">Pers&ouml;nlichkeit ist nichts universeles, die Liebe kann es sein.<font></p>
<p style="font-family:sans serif" align="center">Liebe ist: die Pers&ouml;nlichkeit deren Ausdruck man begegnet zu sch&auml;tzen, darum findet Ausdruck.</p>

</body>
</html> `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 