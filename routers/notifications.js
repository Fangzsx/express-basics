const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended : true}))
router.use(express.json());

//temporary db
const notificationDB = [
    { content : "new message1" , timeStamp : new Date(Date.now())},
    { content : "new message2" , timeStamp : new Date(Date.now())},
    { content : "new message3" , timeStamp : new Date(Date.now())},
    { content : "new message4" , timeStamp : new Date(Date.now())},
]

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).send('post notifications');
})

router.get('/', (req, res) => {
    res.send(notificationDB);
})

module.exports = router