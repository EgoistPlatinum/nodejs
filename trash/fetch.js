const fetch = require("node-fetch");
const axios = require("axios");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    data.slice(0, 10).forEach((item) => console.log(item.title));
  });

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.data)
  .then((data) => {
    console.log(data);
  });
