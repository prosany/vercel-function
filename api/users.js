module.exports = (req, res) => {
  if (req.method === "GET") {
    res.sendFile("../public/index.html");
  }
};
