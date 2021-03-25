const getAll = (req,res) => {
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
}
const getOne = (req,res) => {
    let id = req.params.id;
    res.json({
        "message": `getting message with ID ${id}`
    })
}
const post = (req,res) => {
    res.json({
        "message": "Posting a new message for user Pikatchu"
    })
}
const update = (req,res) => {
    let id = req.params.id;
    res.json({
        "message": `updating a message with id ${id}`
    })
}
const deleteOne = (req,res) => {
    let id = req.params.id;
    res.json({
        "message": `deleting a message with id ${id}`
    })
}




module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.post = post;
module.exports.update = update;
module.exports.deleteOne = deleteOne;
