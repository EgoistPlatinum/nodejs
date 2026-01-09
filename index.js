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

// app.use((req, res, next) => {
//   if (
//     !req.headers["content-type"] ||
//     !req.headers["content-type"].match(/json/)
//   ) {
//     return next();
//   }
//
//   let data = ''
//   req.on('data', chunk => {
//     data += chunk
//   })
//   req.on('end', () => {
//     try {
//       req.body = data ? JSON.parse(data) : {}
//       next()
//     } catch (e) {
//       res.status(400).send(e.message)
//     }
//   })
// })

app.use(express.json());
app.use(express.static("public"));

app.post("/inc", (req, res) => {
  const data = req.body;
  count += data.value || 1;
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
