const express = require("express");
const nunjucks = require("nunjucks");

const app = express();
const port = 3000;
const uikitCss =
  '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.25.4/dist/css/uikit.min.css" />';

let count = 0;

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

// ejs
// app.set("view engine", "ejs")

// njk
app.set("view engine", "njk");

app.post("/inc", (req, res) => {
  count++;
  res.json({ count });
});

// ejs
// app.get('/', (req, res) => {
//   res.render('index', {count, uikitCss})
// });

// njk
app.get("/", (req, res) => {
  const counts = [];
  for (let i = 0; i < count; i++) {
    counts.push(99 - i);
  }
  res.render("index", { count, uikitCss, counts });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
