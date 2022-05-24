const express = require('express');
const router = express.Router();
router.use(express.urlencoded({extended : true}))

router.get('/', (req, res) => {
    res.send(`*showing all friends`);
})

router.post('/', (req, res) => {
    console.log(req.headers);
    res.status(201).send('post friend');
})

router.get('/requests', (req , res) => {
    res.send(`*showing all friend requests`);
    console.log('request');
})

module.exports = router