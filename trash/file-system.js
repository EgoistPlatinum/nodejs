const fs = require("fs");
const path = require("path");

const readFileSafe = (file, defaultData, callback) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        callback(null, defaultData);
      } else {
        callback(err);
      }
    } else {
      callback(null, data);
    }
  });
};

readFileSafe("non-existent.txt", "it's fine", (err, data) => {
  if (data) console.log(data);
});

console.log(fs.readFileSync(path.join(__dirname, "file.txt"), "utf8"));
