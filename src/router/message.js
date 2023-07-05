const express = require('express');
const messageController = require('../controllers/message');


const app = express.Router();


app.get('/messages', messageController.index);
app.post('/messages/create', messageController.store);
app.delete('/messages/:id', messageController.destroy);


module.exports = app;