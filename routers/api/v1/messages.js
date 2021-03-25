const express = require('express');
const router = express.Router();
const messageController = require('../../../controllers/api/v1/messages');

router.get('/', messageController.getAll);

router.get('/:id', messageController.getOne);


router.post('/', messageController.post);

router.put('/:id', messageController.update);

router.delete('/:id', messageController.deleteOne);

module.exports = router;

