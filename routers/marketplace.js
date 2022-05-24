const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended : false }))

const items = [
   { itemName : 'phone', price : 200 },
   { itemName : 'laptop', price : 400},
   { itemName : 'tablet', price : 300},
]

router.post('/', (req, res) => {
   console.log(req.body);
   res.status(201).send('post product');
});

router.get('/', (req, res) => {
   res.send('*showing all listings');
});

module.exports = router