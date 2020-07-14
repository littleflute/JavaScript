const express = require('express')
const app = express()
const port = 8080
const tag ="[app.js_v0.12]";

app.get('/', (req, res) => res.send( tag + 'Hello World!'+Date() ));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
