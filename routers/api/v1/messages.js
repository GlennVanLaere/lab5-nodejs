const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {

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
router.get('/:id', (req,res) => {
    let id = req.params.id;
    res.json({
        "message": `getting message with ID ${id}`
    })
})
router.post('/', (req,res) => {
    res.json({
        "message": "Posting a new message for user Pikatchu"
    })
})
router.put('/:id', (req,res) => {
    let id = req.params.id;
    res.json({
        "message": `updating a message with id ${id}`
    })
})
router.delete('/:id', (req,res) => {
    let id = req.params.id;
    res.json({
        "message": `deleting a message with id ${id}`
    })
})

module.exports = router;

