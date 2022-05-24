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
    const {authorization} = req.headers;
    if(authorization && authorization === '123'){
        const notification = req.body
        console.log(notificationDB);
        notificationDB.push(notification);
        res.status(201).send(notification);
    }else{
        res.status(403).send('Forbidden');
    }


});

router.get('/', (req, res) => {
    res.send(notificationDB);
})

module.exports = router