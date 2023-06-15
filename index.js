const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.json([
    {
      name: "John Doe",
      email: "john@example.com",
    },
    {
      name: "Bob Doe",
      email: "bob@example.com",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
