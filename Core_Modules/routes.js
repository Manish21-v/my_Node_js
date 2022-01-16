const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method.toUpperCase();
  if (url == '/') {
    console.log('url', url);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1>Welcome to Node js Core Module Learning</h1>')
    res.write(`<body>
    <form action ="/create-user" method ="POST">
    <input type ='text' name ='username'> 
    </input>
    <button type ="submit">submit
    </button>
    </form>
    </body>`);
    res.write('</html>');
    return res.end();
  }
  else if (url == '/users') {
    console.log('url', url);
    res.write(`<html>
    <body>
    <ul>
    <li>Manish</li>
    <li>Manoj</li>
    <li>Avinash</li>
    </ul>
    </body>
    </html>`);
    return res.end();
  }
  else if (url == "/create-user" && method == 'POST') {
    console.log('only body',req.body);
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    req.on('end', () => {
      const ParsedBody = Buffer.concat(body).toString();
      console.log('ParsedBody',ParsedBody.split('=')[1]);
    })
    res.statusCode = 302;
    res.setHeader('Location','/');
    return res.end();
  }
}


module.exports = requestHandler;