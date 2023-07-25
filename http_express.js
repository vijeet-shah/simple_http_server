const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hello World");
});
app.use((req, res) => {
  res.status(404).send("Error");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
