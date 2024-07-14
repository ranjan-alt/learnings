//basic http server

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("hello world");
  //   const method = req.method;
  //   const URL = req.url;
  //   console.log(method, URL);
  //   res.write(`${method} ${URL}`);

  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      console.log(body);
    });
    req.on("end", () => {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "Message recieved" }));
    });
  }
  //   res.end();
});

server.listen(8001, () => {
  console.log("server is up and running");
});
