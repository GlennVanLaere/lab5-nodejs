const express = require('express')
const app = express()
const port = 3000
const messageRouter = require('./routers/api/v1/messages');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/messages', messageRouter);



app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})