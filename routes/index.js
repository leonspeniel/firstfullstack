const express = require('express');
const app = express();
/* GET home page. */
app.get('/', (req, res) => {
  res.send({hi : "how r u ?"})
});

const PORT = process.env.PORT || 5000
app.listen(PORT)