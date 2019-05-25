const express = require('express')
const app = express()
const PORT = 3000

const env = process.env.NODE_ENV || 'Unknown'
app.get('/', (req, res) => res.send(`Hello World | Enviroment: ${env}`))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))