// http server

const http = require("http");
const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "content-type": "text/html" });
  res.write("hello world");
  res.write("ranjan");
  const URL = req.url;
  const method = req.method;
  res.write(`URL: ${URL} Method: ${method} `);

  res.end();
  //   res.status(200).json({
  //     message: "success",
  //   });
});

server.listen(8001);
