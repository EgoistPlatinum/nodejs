const http = require("http");

const visit = new Map();
const search = new Map();

const PORT = 8000;
const serverName = `http://localhost:${PORT}`;

const server = http.createServer((req, res) => {
  const parseUrl = new URL(req.url, serverName);

  for (const paramName of parseUrl.searchParams.keys()) {
    search.set(paramName, (search.get(paramName) || 0) + 1);
  }

  const key = parseUrl.pathname;
  const count = (visit.get(req.url) || 0) + 1;
  visit.set(key, count);

  res.end(`Visit to ${key}  #${count}

    Search params counts:
    ${[...search.entries()]
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n")}

  `);
});

server.listen(PORT, () => {
  console.log(`Listening to ${serverName}`);
});
