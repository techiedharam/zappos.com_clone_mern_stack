const express = require('express')
const app = express()
const port = 8000

app.get('/health', (req, res) => res.send('Health route is working fine !'))
app.listen(port, () => console.log(`zappos.com  ecommerce website listening on port ${port}!`))