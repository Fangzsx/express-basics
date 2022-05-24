const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.send('*showing all listings');
});

module.exports = router