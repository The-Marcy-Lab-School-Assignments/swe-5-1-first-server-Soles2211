const http = require("node:http");

const dieRolls = (num) => {
  let rolls = [];
  if (!num) num = 1;
  for (let i = 0; i < num; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }
  return rolls;
};

const server = http.createServer((req, res) => {
  console.log(new Date().toISOString());
  const { method, url } = req;
  const { pathname, searchParams } = new URL(req.url, "http://localhost:8080");

  if (method === "GET" && url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
      JSON.stringify({
        message: "success",
        data: "Hi! It is a great day today!",
      }),
    );
    return;
  }

  if (method === "GET" && url === "/api/joke") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ setup: "What's 9 + 10?", punchline: "21" }));
    return;
  }

  if (method === "GET" && pathname === "/api/rollDie") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        rolls: dieRolls(parseInt(searchParams.get("quantity"))),
      }),
    );
    return;
  }

  if (method === "GET" && url === "") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(8080, () => {
  console.log("Server listening on http://localhost:8080");
});
