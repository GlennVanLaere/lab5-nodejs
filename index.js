const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1/messages', (req,res) => {

    if(req.query.user){
        let username = req.query.user;
        res.json({
            "message": `getting message with name ${username}`
        })

        }
        else{
            res.json({
                "message": "getting message"
            })

        }

})
app.get('/api/v1/messages/:id', (req,res) => {
    let id = req.params.id;
    res.json({
        "message": `getting message with ID ${id}`
    })
})
app.post('/api/v1/messages', (req,res) => {
    res.json({
        "message": "Posting a new message for user Pikatchu"
    })
})
app.put('/api/v1/messages/:id', (req,res) => {
    let id = req.params.id;
    res.json({
        "message": `updating a message with id ${id}`
    })
})
app.delete('/api/v1/messages/:id', (req,res) => {
    let id = req.params.id;
    res.json({
        "message": `deleting a message with id ${id}`
    })
})
app.get('/api/v1/messages?user=username', (req,res) => {
    let username = req.query;
    res.json({
        "message": `getting message with name ${username}`
    })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})