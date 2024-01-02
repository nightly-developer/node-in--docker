const express = require('express');
const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  console.log('user hit the resource')

  const obj = {
    name: "Vaibhav Kesarkar",
    age: 21,
    fav_color: "olive-green"
  }
  res.set({
    'Content-Type': 'text/plain',
    'Content-Length': '123',
    'ETag': '12345',
    'status': 200
  })
  res.json(obj)
  res.end()
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(port, () => {
  console.log(`listening on port ${port}...`)
})