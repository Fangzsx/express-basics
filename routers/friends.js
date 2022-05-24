const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send(`*showing all friends`);
})

router.get('/requests', (req , res) => {
    res.send(`*showing all friend requests`);
    console.log('request');
})

module.exports = router