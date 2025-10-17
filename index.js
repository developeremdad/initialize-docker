const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Welcome to docker initial project on port ${port}`);
});
// docker run -p 5000:5000 --name initialize-container -w //app -v initialize-docker-logs://app/logs -v "${PWD}://app" -v //app/node_modules --rm initialize-docker

// docker run -p 5000:5000 --name ts-container -v ts-docker-logs://app/logs -w //app -v "//D:\Docker\docker-initialize"://app -v //app/node_modules --rm ts-docker-image

// docker run -p 5000:5000 --name initialize-container -w /app -v "/d/Docker/docker-initialize:/app" -v "/d/Docker/docker-initialize/node_modules:/app/node_modules" --rm initialize-image