const http = require("http");
const app = require("./database");
const server = http.createServer(app);

server.listen(5000, () => {
  console.log("Server is running at port: 5000");
});
