const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})


app.get('ping', (req, res) => {
    res.send('pong')
})






app.listen(PORT, () => {
    console.log('Connected to server on PORT', PORT)
  })
  