const express = require('express')
const cors = require("cors");
const path = require('path')
const PORT = process.env.PORT || 3000;

const app = express()
const port = 3000
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile("/index.html")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})