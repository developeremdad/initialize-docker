const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Welcome to docker initial project on port ${port}`);
});
// docker run -p 5000:5000 --name initialize-container -w //app -v initialize-docker-logs://app/logs -v "${PWD}://app" -v //app/node_modules --rminitialize-docker