const http = require("http");
const colors = require("colors");
const PORT = process.env.PORT_URL || 7000;
const app = require("./src/app/app");
require("./src/config/db.Connect");

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(
    `******************* server running on port ${PORT} ***********************`
      .yellow
  );
});
