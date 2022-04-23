const path = require("path");

module.exports = (req, res) => {
  if (req.method === "GET") {
    res.sendFile(path.resolve(path.join(__dirname, "../public/index.html")));
  }
};
