const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const messageRouter = require('./routers/api/v1/messages');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/messages', messageRouter);



app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});