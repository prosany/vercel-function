module.exports = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json([
      { name: "Mahabub", age: "25" },
      { name: "Rajib", age: "26" },
    ]);
  }
};
