const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {

	res.send("Hello World! I'm alive.");
});

app.get("/418", (req, res) => {
  res.status(418);
  res.set("Custom-Header", "Hi!");
  res.send("Coffee!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

